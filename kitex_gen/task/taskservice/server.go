// Code generated by Kitex v0.7.0. DO NOT EDIT.
package taskservice

import (
	server "github.com/cloudwego/kitex/server"
	task "jobor/kitex_gen/task"
)

// NewServer creates a server.Server with the given handler and options.
func NewServer(handler task.TaskService, opts ...server.Option) server.Server {
	var options []server.Option

	options = append(options, opts...)

	svr := server.NewServer(options...)
	if err := svr.RegisterService(serviceInfo(), handler); err != nil {
		panic(err)
	}
	return svr
}
