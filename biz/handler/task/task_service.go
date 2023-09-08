// Code generated by hertz generator.

package task

import (
	"context"
	"fmt"
	"github.com/cloudwego/hertz/pkg/app"
	"jobor/biz/dal/db"
	"jobor/biz/model"
	"jobor/biz/pack/dispatcher"
	"jobor/biz/response"
	task "jobor/kitex_gen/task"
)

// GetTaskAll .
//
//	@Summary		jobor task all get summary
//	@Description	jobor task all get
//	@Tags			jobor task
//	@router			/api/v1/jobor/tasks [GET]
func GetTaskAll(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.TaskQuery
	err = c.BindAndValidate(&req)
	if err != nil {
		response.ParamFailed(ctx, c, err)
		//response.SendBaseResp(ctx, c, err)
		return
	}
	var objs []task.TaskAllResp
	resp := response.PageDataList{List: &objs}
	if resp.Total, err = model.DataWithScopes(db.DB.Model(&model.JoborTask{}), model.NameTask, model.Scan,
		resp.List, model.GetScopesList()); err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}
	response.SendDataResp(ctx, c, response.Succeed, resp)
}

// GetTaskById .
//
//	@Summary		jobor task get by id summary
//	@Description	jobor task get by id
//	@Tags			jobor task
//	@Param			id	path	int	true	"int valid"
//	@router			/api/v1/jobor/task/{id} [GET]
func GetTaskById(ctx context.Context, c *app.RequestContext) {
	var err error
	_id := c.Params.ByName("id")

	hostResp, err := model.GetTaskInfoById(_id, false)
	if err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}

	response.SendDataResp(ctx, c, response.Succeed, hostResp)
}

// GetTask .
//
//	@Summary		jobor task get summary
//	@Description	jobor task get
//	@Tags			jobor task
//	@Param			name		query	string	false	"name"
//	@Param			page		query	int		false	"page"
//	@Param			pageSize	query	int		false	"pageSize"
//	@router			/api/v1/jobor/task [GET]
func GetTask(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.TaskQuery
	err = c.BindAndValidate(&req)
	if err = c.BindAndValidate(&req); err != nil {
		response.ParamFailed(ctx, c, err)
		return
	}

	var objs model.Tasks

	resp := response.InitPageData(ctx, c, &objs, false)

	if _, err = objs.List(&req, &resp); err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}
	response.SendDataResp(ctx, c, response.Succeed, resp)
}

// PostTask .
//
//	@Summary		jobor task post summary
//	@Description	jobor task post
//	@Tags			jobor task
//	@Param			json	body	task.PostTaskReq	true	"参数"
//	@router			/api/v1/jobor/task [POST]
func PostTask(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.PostTaskReq
	if err = c.BindAndValidate(&req); err != nil {
		response.ParamFailed(ctx, c, err)
		return
	}
	obj, err := model.AddTask(ctx, db.DB, &req)
	if err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}

	response.SendDataResp(ctx, c, response.Succeed, obj)
}

// PutTask .
//
//	@Summary		jobor task put summary
//	@Description	jobor task put
//	@Tags			jobor task
//	@Param			id		path	int				true	"int valid"
//	@Param			json	body	task.PutTaskReq	true	"参数"
//	@router			/api/v1/jobor/task/{id} [PUT]
func PutTask(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.PutTaskReq
	err = c.BindAndValidate(&req)
	if err != nil {
		response.ParamFailed(ctx, c, err)
		return
	}

	_id := c.Params.ByName("id")
	//u, _ := task.GetUserValue(c, false)
	//req.Updater = &u.Nickname
	obj, err := model.ModTask(ctx, db.DB, _id, &req)
	if err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}

	response.SendDataResp(ctx, c, response.Succeed, obj)
}

// DeleteTask .
//
//	@Summary		jobor task delete summary
//	@Description	jobor task delete
//	@Tags			jobor task
//	@Param			id	path	int	true	"int valid"
//	@router			/api/v1/jobor/task/{id} [DELETE]
func DeleteTask(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.TaskQuery
	if err = c.BindAndValidate(&req); err != nil {
		response.ParamFailed(ctx, c, err)
		return
	}
	_id := c.Params.ByName("id")
	if objs, err := model.DelTask(ctx, db.DB, []interface{}{_id}); err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	} else {
		response.SendDataResp(ctx, c, response.Succeed, objs)
	}
}

// RunTask .
//
//	@Summary		jobor task run summary
//	@Description	jobor task run
//	@Tags			jobor task
//	@Param			id	path	int	true	"int valid"
//
// @router /api/v1/jobor/task/{id}/run [POST]
func RunTask(ctx context.Context, c *app.RequestContext) {
	var err error
	var req task.TaskQuery
	err = c.BindAndValidate(&req)
	if err = c.BindAndValidate(&req); err != nil {
		response.ParamFailed(ctx, c, err)
		return
	}
	_id := c.Params.ByName("id")
	t, err := model.GetTaskInfoById(_id, false)
	if err != nil {
		response.SendBaseResp(ctx, c, err)
		return
	}
	if t.Deleted {
		response.SendBaseResp(ctx, c, fmt.Errorf("task %s is delete,task can't execute", t.Name))
		return
	}
	go dispatcher.RunTasks(model.TriggerAuto, model.TriggerManual, *t)
	response.SendDataResp(ctx, c, response.Succeed, "")
}
