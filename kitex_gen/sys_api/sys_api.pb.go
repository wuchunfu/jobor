// idl/hello/hello.proto

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v4.24.2
// source: sys_api.proto

package sys_api

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "jobor/kitex_gen/api"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ApiQuery struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     int64  `protobuf:"varint,1,opt,name=id,proto3" query:"id" form:"id" json:"id"`
	Name   string `protobuf:"bytes,2,opt,name=name,proto3" query:"name" form:"name" json:"name"`
	Title  string `protobuf:"bytes,3,opt,name=title,proto3" query:"title" form:"title" json:"title"`
	Dom    string `protobuf:"bytes,4,opt,name=dom,proto3" form:"dom" json:"dom" query:"dom"`
	Path   string `protobuf:"bytes,5,opt,name=path,proto3" query:"path" form:"path" json:"path"`
	Method string `protobuf:"bytes,6,opt,name=method,proto3" form:"method" json:"method" query:"method"`
	Group  string `protobuf:"bytes,14,opt,name=group,proto3" query:"group" form:"group" json:"group"`
}

func (x *ApiQuery) Reset() {
	*x = ApiQuery{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sys_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiQuery) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiQuery) ProtoMessage() {}

func (x *ApiQuery) ProtoReflect() protoreflect.Message {
	mi := &file_sys_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiQuery.ProtoReflect.Descriptor instead.
func (*ApiQuery) Descriptor() ([]byte, []int) {
	return file_sys_api_proto_rawDescGZIP(), []int{0}
}

func (x *ApiQuery) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ApiQuery) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ApiQuery) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *ApiQuery) GetDom() string {
	if x != nil {
		return x.Dom
	}
	return ""
}

func (x *ApiQuery) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *ApiQuery) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *ApiQuery) GetGroup() string {
	if x != nil {
		return x.Group
	}
	return ""
}

type ApiPost struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string `protobuf:"bytes,2,opt,name=name,proto3" query:"name" form:"name,required" json:"name,required" vd:"len($)>1"`
	Title        string `protobuf:"bytes,3,opt,name=title,proto3" query:"title" form:"title" json:"title"`
	Dom          string `protobuf:"bytes,4,opt,name=dom,proto3" query:"dom" form:"dom" json:"dom"`
	Group        string `protobuf:"bytes,14,opt,name=group,proto3" form:"group" json:"group" query:"group"`
	Path         string `protobuf:"bytes,5,opt,name=path,proto3" query:"path" form:"path,required" json:"path,required"`
	Method       string `protobuf:"bytes,6,opt,name=method,proto3" form:"method,required" json:"method,required" query:"method"`
	Enabled      bool   `protobuf:"varint,12,opt,name=enabled,proto3" query:"enabled" json:"enabled,omitempty"`
	AuditEnabled bool   `protobuf:"varint,13,opt,name=audit_enabled,json=auditEnabled,proto3" query:"enabled_audit" json:"enabled_audit,omitempty"`
}

func (x *ApiPost) Reset() {
	*x = ApiPost{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sys_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiPost) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiPost) ProtoMessage() {}

func (x *ApiPost) ProtoReflect() protoreflect.Message {
	mi := &file_sys_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiPost.ProtoReflect.Descriptor instead.
func (*ApiPost) Descriptor() ([]byte, []int) {
	return file_sys_api_proto_rawDescGZIP(), []int{1}
}

func (x *ApiPost) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ApiPost) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *ApiPost) GetDom() string {
	if x != nil {
		return x.Dom
	}
	return ""
}

func (x *ApiPost) GetGroup() string {
	if x != nil {
		return x.Group
	}
	return ""
}

func (x *ApiPost) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *ApiPost) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *ApiPost) GetEnabled() bool {
	if x != nil {
		return x.Enabled
	}
	return false
}

func (x *ApiPost) GetAuditEnabled() bool {
	if x != nil {
		return x.AuditEnabled
	}
	return false
}

type ApiPut struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         *string `protobuf:"bytes,2,opt,name=name,proto3,oneof" form:"name,omitempty" json:"name,omitempty" query:"name"`
	Title        *string `protobuf:"bytes,3,opt,name=title,proto3,oneof" query:"title" form:"title,omitempty" json:"title,omitempty"`
	Dom          *string `protobuf:"bytes,4,opt,name=dom,proto3,oneof" query:"dom" form:"dom,omitempty" json:"dom,omitempty"`
	Group        *string `protobuf:"bytes,14,opt,name=group,proto3,oneof" query:"group" form:"group,omitempty" json:"group,omitempty"`
	Path         *string `protobuf:"bytes,5,opt,name=path,proto3,oneof" form:"path,omitempty" json:"path,omitempty" query:"path"`
	Method       *string `protobuf:"bytes,6,opt,name=method,proto3,oneof" query:"method" form:"method,omitempty" json:"method,omitempty"`
	Enabled      *bool   `protobuf:"varint,12,opt,name=Enabled,proto3,oneof" query:"enabled" json:"enabled,omitempty"`
	AuditEnabled *bool   `protobuf:"varint,13,opt,name=AuditEnabled,proto3,oneof" query:"enabled_audit" json:"enabled_audit,omitempty"`
	Updater      *string `protobuf:"bytes,60,opt,name=updater,proto3,oneof" form:"-" json:"-" query:"-"`
}

func (x *ApiPut) Reset() {
	*x = ApiPut{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sys_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiPut) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiPut) ProtoMessage() {}

func (x *ApiPut) ProtoReflect() protoreflect.Message {
	mi := &file_sys_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiPut.ProtoReflect.Descriptor instead.
func (*ApiPut) Descriptor() ([]byte, []int) {
	return file_sys_api_proto_rawDescGZIP(), []int{2}
}

func (x *ApiPut) GetName() string {
	if x != nil && x.Name != nil {
		return *x.Name
	}
	return ""
}

func (x *ApiPut) GetTitle() string {
	if x != nil && x.Title != nil {
		return *x.Title
	}
	return ""
}

func (x *ApiPut) GetDom() string {
	if x != nil && x.Dom != nil {
		return *x.Dom
	}
	return ""
}

func (x *ApiPut) GetGroup() string {
	if x != nil && x.Group != nil {
		return *x.Group
	}
	return ""
}

func (x *ApiPut) GetPath() string {
	if x != nil && x.Path != nil {
		return *x.Path
	}
	return ""
}

func (x *ApiPut) GetMethod() string {
	if x != nil && x.Method != nil {
		return *x.Method
	}
	return ""
}

func (x *ApiPut) GetEnabled() bool {
	if x != nil && x.Enabled != nil {
		return *x.Enabled
	}
	return false
}

func (x *ApiPut) GetAuditEnabled() bool {
	if x != nil && x.AuditEnabled != nil {
		return *x.AuditEnabled
	}
	return false
}

func (x *ApiPut) GetUpdater() string {
	if x != nil && x.Updater != nil {
		return *x.Updater
	}
	return ""
}

type ApiDel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ApiDel) Reset() {
	*x = ApiDel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sys_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiDel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiDel) ProtoMessage() {}

func (x *ApiDel) ProtoReflect() protoreflect.Message {
	mi := &file_sys_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiDel.ProtoReflect.Descriptor instead.
func (*ApiDel) Descriptor() ([]byte, []int) {
	return file_sys_api_proto_rawDescGZIP(), []int{3}
}

type ApiResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           int64   `protobuf:"varint,1,opt,name=id,proto3" form:"id" json:"id" query:"id"`
	Name         string  `protobuf:"bytes,2,opt,name=name,proto3" query:"name" form:"name" json:"name"`
	Title        string  `protobuf:"bytes,3,opt,name=title,proto3" query:"title" form:"title" json:"title"`
	Dom          string  `protobuf:"bytes,4,opt,name=dom,proto3" form:"dom" json:"dom" query:"dom"`
	Path         string  `protobuf:"bytes,5,opt,name=path,proto3" query:"path" form:"path" json:"path"`
	Method       string  `protobuf:"bytes,6,opt,name=method,proto3" form:"method" json:"method" query:"method"`
	Enabled      *bool   `protobuf:"varint,12,opt,name=Enabled,proto3,oneof" query:"enabled" json:"enabled,omitempty"`
	AuditEnabled *bool   `protobuf:"varint,13,opt,name=AuditEnabled,proto3,oneof" query:"enabled_audit" json:"enabled_audit,omitempty"`
	Group        *string `protobuf:"bytes,14,opt,name=group,proto3,oneof" form:"group,omitempty" json:"group,omitempty" query:"group"`
	Updater      *string `protobuf:"bytes,60,opt,name=updater,proto3,oneof" query:"-" form:"-" json:"-"`
}

func (x *ApiResp) Reset() {
	*x = ApiResp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sys_api_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiResp) ProtoMessage() {}

func (x *ApiResp) ProtoReflect() protoreflect.Message {
	mi := &file_sys_api_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiResp.ProtoReflect.Descriptor instead.
func (*ApiResp) Descriptor() ([]byte, []int) {
	return file_sys_api_proto_rawDescGZIP(), []int{4}
}

func (x *ApiResp) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ApiResp) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ApiResp) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *ApiResp) GetDom() string {
	if x != nil {
		return x.Dom
	}
	return ""
}

func (x *ApiResp) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *ApiResp) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *ApiResp) GetEnabled() bool {
	if x != nil && x.Enabled != nil {
		return *x.Enabled
	}
	return false
}

func (x *ApiResp) GetAuditEnabled() bool {
	if x != nil && x.AuditEnabled != nil {
		return *x.AuditEnabled
	}
	return false
}

func (x *ApiResp) GetGroup() string {
	if x != nil && x.Group != nil {
		return *x.Group
	}
	return ""
}

func (x *ApiResp) GetUpdater() string {
	if x != nil && x.Updater != nil {
		return *x.Updater
	}
	return ""
}

var File_sys_api_proto protoreflect.FileDescriptor

var file_sys_api_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x07, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x1a, 0x09, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x98, 0x02, 0x0a, 0x08, 0x41, 0x70, 0x69, 0x51, 0x75, 0x65, 0x72, 0x79,
	0x12, 0x1c, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x0c, 0xb2, 0xbb,
	0x18, 0x02, 0x69, 0x64, 0xca, 0xbb, 0x18, 0x02, 0x69, 0x64, 0x52, 0x02, 0x69, 0x64, 0x12, 0x24,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x10, 0xb2, 0xbb,
	0x18, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0xca, 0xbb, 0x18, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x28, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x12, 0xb2, 0xbb, 0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0xca, 0xbb,
	0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x20,
	0x0a, 0x03, 0x64, 0x6f, 0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0e, 0xb2, 0xbb, 0x18,
	0x03, 0x64, 0x6f, 0x6d, 0xca, 0xbb, 0x18, 0x03, 0x64, 0x6f, 0x6d, 0x52, 0x03, 0x64, 0x6f, 0x6d,
	0x12, 0x24, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x42, 0x10,
	0xb2, 0xbb, 0x18, 0x04, 0x70, 0x61, 0x74, 0x68, 0xca, 0xbb, 0x18, 0x04, 0x70, 0x61, 0x74, 0x68,
	0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x2c, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x42, 0x14, 0xb2, 0xbb, 0x18, 0x06, 0x6d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0xca, 0xbb, 0x18, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x06, 0x6d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x12, 0x28, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x0e, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x12, 0xb2, 0xbb, 0x18, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0xca, 0xbb,
	0x18, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x52, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x22, 0xbd,
	0x03, 0x0a, 0x07, 0x41, 0x70, 0x69, 0x50, 0x6f, 0x73, 0x74, 0x12, 0x39, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x25, 0xb2, 0xbb, 0x18, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0xca, 0xbb, 0x18, 0x0d, 0x6e, 0x61, 0x6d, 0x65, 0x2c, 0x72, 0x65, 0x71, 0x75, 0x69,
	0x72, 0x65, 0x64, 0xda, 0xbb, 0x18, 0x08, 0x6c, 0x65, 0x6e, 0x28, 0x24, 0x29, 0x3e, 0x31, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x28, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x12, 0xb2, 0xbb, 0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0xca,
	0xbb, 0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12,
	0x20, 0x0a, 0x03, 0x64, 0x6f, 0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0e, 0xb2, 0xbb,
	0x18, 0x03, 0x64, 0x6f, 0x6d, 0xca, 0xbb, 0x18, 0x03, 0x64, 0x6f, 0x6d, 0x52, 0x03, 0x64, 0x6f,
	0x6d, 0x12, 0x28, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x12, 0xb2, 0xbb, 0x18, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0xca, 0xbb, 0x18, 0x05, 0x67,
	0x72, 0x6f, 0x75, 0x70, 0x52, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x2d, 0x0a, 0x04, 0x70,
	0x61, 0x74, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x42, 0x19, 0xb2, 0xbb, 0x18, 0x04, 0x70,
	0x61, 0x74, 0x68, 0xca, 0xbb, 0x18, 0x0d, 0x70, 0x61, 0x74, 0x68, 0x2c, 0x72, 0x65, 0x71, 0x75,
	0x69, 0x72, 0x65, 0x64, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x35, 0x0a, 0x06, 0x6d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1d, 0xb2, 0xbb, 0x18, 0x06,
	0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0xca, 0xbb, 0x18, 0x0f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x2c, 0x72, 0x65, 0x71, 0x75, 0x69, 0x72, 0x65, 0x64, 0x52, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x12, 0x41, 0x0a, 0x07, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0c, 0x20, 0x01,
	0x28, 0x08, 0x42, 0x27, 0xb2, 0xbb, 0x18, 0x07, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0xca,
	0xf3, 0x18, 0x18, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64,
	0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x52, 0x07, 0x65, 0x6e, 0x61,
	0x62, 0x6c, 0x65, 0x64, 0x12, 0x58, 0x0a, 0x0d, 0x61, 0x75, 0x64, 0x69, 0x74, 0x5f, 0x65, 0x6e,
	0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x08, 0x42, 0x33, 0xb2, 0xbb, 0x18,
	0x0d, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x5f, 0x61, 0x75, 0x64, 0x69, 0x74, 0xca, 0xf3,
	0x18, 0x1e, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x5f,
	0x61, 0x75, 0x64, 0x69, 0x74, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x22,
	0x52, 0x0c, 0x61, 0x75, 0x64, 0x69, 0x74, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x22, 0x85,
	0x05, 0x0a, 0x06, 0x41, 0x70, 0x69, 0x50, 0x75, 0x74, 0x12, 0x33, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1a, 0xb2, 0xbb, 0x18, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0xca, 0xbb, 0x18, 0x0e, 0x6e, 0x61, 0x6d, 0x65, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d,
	0x70, 0x74, 0x79, 0x48, 0x00, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x37,
	0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1c, 0xb2,
	0xbb, 0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0xca, 0xbb, 0x18, 0x0f, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x48, 0x01, 0x52, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x88, 0x01, 0x01, 0x12, 0x2f, 0x0a, 0x03, 0x64, 0x6f, 0x6d, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x18, 0xb2, 0xbb, 0x18, 0x03, 0x64, 0x6f, 0x6d, 0xca, 0xbb, 0x18,
	0x0d, 0x64, 0x6f, 0x6d, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x48, 0x02,
	0x52, 0x03, 0x64, 0x6f, 0x6d, 0x88, 0x01, 0x01, 0x12, 0x37, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1c, 0xb2, 0xbb, 0x18, 0x05, 0x67, 0x72, 0x6f,
	0x75, 0x70, 0xca, 0xbb, 0x18, 0x0f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2c, 0x6f, 0x6d, 0x69, 0x74,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x48, 0x03, 0x52, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x88, 0x01,
	0x01, 0x12, 0x33, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x42,
	0x1a, 0xb2, 0xbb, 0x18, 0x04, 0x70, 0x61, 0x74, 0x68, 0xca, 0xbb, 0x18, 0x0e, 0x70, 0x61, 0x74,
	0x68, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x48, 0x04, 0x52, 0x04, 0x70,
	0x61, 0x74, 0x68, 0x88, 0x01, 0x01, 0x12, 0x3b, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1e, 0xb2, 0xbb, 0x18, 0x06, 0x6d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0xca, 0xbb, 0x18, 0x10, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x2c, 0x6f, 0x6d, 0x69,
	0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x48, 0x05, 0x52, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x88, 0x01, 0x01, 0x12, 0x46, 0x0a, 0x07, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x08, 0x42, 0x27, 0xb2, 0xbb, 0x18, 0x07, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65,
	0x64, 0xca, 0xf3, 0x18, 0x18, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c,
	0x65, 0x64, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x48, 0x06, 0x52,
	0x07, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x5c, 0x0a, 0x0c, 0x41,
	0x75, 0x64, 0x69, 0x74, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28,
	0x08, 0x42, 0x33, 0xb2, 0xbb, 0x18, 0x0d, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x5f, 0x61,
	0x75, 0x64, 0x69, 0x74, 0xca, 0xf3, 0x18, 0x1e, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e,
	0x61, 0x62, 0x6c, 0x65, 0x64, 0x5f, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2c, 0x6f, 0x6d, 0x69, 0x74,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x48, 0x07, 0x52, 0x0c, 0x41, 0x75, 0x64, 0x69, 0x74, 0x45,
	0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x29, 0x0a, 0x07, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x72, 0x18, 0x3c, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xb2, 0xbb, 0x18, 0x01,
	0x2d, 0xca, 0xbb, 0x18, 0x01, 0x2d, 0x48, 0x08, 0x52, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x72, 0x88, 0x01, 0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x08, 0x0a,
	0x06, 0x5f, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x42, 0x06, 0x0a, 0x04, 0x5f, 0x64, 0x6f, 0x6d, 0x42,
	0x08, 0x0a, 0x06, 0x5f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x70, 0x61,
	0x74, 0x68, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x42, 0x0a, 0x0a,
	0x08, 0x5f, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x42, 0x0f, 0x0a, 0x0d, 0x5f, 0x41, 0x75,
	0x64, 0x69, 0x74, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x22, 0x08, 0x0a, 0x06, 0x41, 0x70, 0x69, 0x44, 0x65, 0x6c,
	0x22, 0xaa, 0x04, 0x0a, 0x07, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x12, 0x1c, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x0c, 0xb2, 0xbb, 0x18, 0x02, 0x69, 0x64,
	0xca, 0xbb, 0x18, 0x02, 0x69, 0x64, 0x52, 0x02, 0x69, 0x64, 0x12, 0x24, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x10, 0xb2, 0xbb, 0x18, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0xca, 0xbb, 0x18, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x28, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x42,
	0x12, 0xb2, 0xbb, 0x18, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0xca, 0xbb, 0x18, 0x05, 0x74, 0x69,
	0x74, 0x6c, 0x65, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x20, 0x0a, 0x03, 0x64, 0x6f,
	0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0e, 0xb2, 0xbb, 0x18, 0x03, 0x64, 0x6f, 0x6d,
	0xca, 0xbb, 0x18, 0x03, 0x64, 0x6f, 0x6d, 0x52, 0x03, 0x64, 0x6f, 0x6d, 0x12, 0x24, 0x0a, 0x04,
	0x70, 0x61, 0x74, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x42, 0x10, 0xb2, 0xbb, 0x18, 0x04,
	0x70, 0x61, 0x74, 0x68, 0xca, 0xbb, 0x18, 0x04, 0x70, 0x61, 0x74, 0x68, 0x52, 0x04, 0x70, 0x61,
	0x74, 0x68, 0x12, 0x2c, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x14, 0xb2, 0xbb, 0x18, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0xca, 0xbb,
	0x18, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x06, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x12, 0x46, 0x0a, 0x07, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0c, 0x20, 0x01, 0x28,
	0x08, 0x42, 0x27, 0xb2, 0xbb, 0x18, 0x07, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0xca, 0xf3,
	0x18, 0x18, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x2c,
	0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x48, 0x00, 0x52, 0x07, 0x45, 0x6e,
	0x61, 0x62, 0x6c, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x5c, 0x0a, 0x0c, 0x41, 0x75, 0x64, 0x69,
	0x74, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x08, 0x42, 0x33,
	0xb2, 0xbb, 0x18, 0x0d, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x5f, 0x61, 0x75, 0x64, 0x69,
	0x74, 0xca, 0xf3, 0x18, 0x1e, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c,
	0x65, 0x64, 0x5f, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d, 0x70,
	0x74, 0x79, 0x22, 0x48, 0x01, 0x52, 0x0c, 0x41, 0x75, 0x64, 0x69, 0x74, 0x45, 0x6e, 0x61, 0x62,
	0x6c, 0x65, 0x64, 0x88, 0x01, 0x01, 0x12, 0x37, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18,
	0x0e, 0x20, 0x01, 0x28, 0x09, 0x42, 0x1c, 0xb2, 0xbb, 0x18, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70,
	0xca, 0xbb, 0x18, 0x0f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2c, 0x6f, 0x6d, 0x69, 0x74, 0x65, 0x6d,
	0x70, 0x74, 0x79, 0x48, 0x02, 0x52, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x88, 0x01, 0x01, 0x12,
	0x29, 0x0a, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x18, 0x3c, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x0a, 0xb2, 0xbb, 0x18, 0x01, 0x2d, 0xca, 0xbb, 0x18, 0x01, 0x2d, 0x48, 0x03, 0x52, 0x07,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x88, 0x01, 0x01, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x45,
	0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x42, 0x0f, 0x0a, 0x0d, 0x5f, 0x41, 0x75, 0x64, 0x69, 0x74,
	0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x32, 0xca, 0x03,
	0x0a, 0x03, 0x41, 0x70, 0x69, 0x12, 0x5a, 0x0a, 0x10, 0x54, 0x72, 0x69, 0x67, 0x67, 0x65, 0x72,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x70, 0x69, 0x12, 0x11, 0x2e, 0x73, 0x79, 0x73, 0x5f,
	0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x51, 0x75, 0x65, 0x72, 0x79, 0x1a, 0x10, 0x2e, 0x73,
	0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x22, 0x21,
	0xca, 0xc1, 0x18, 0x1d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6a, 0x6f, 0x62, 0x6f,
	0x72, 0x2f, 0x61, 0x70, 0x69, 0x2d, 0x61, 0x75, 0x74, 0x6f, 0x2d, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x48, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x41, 0x70, 0x69, 0x41, 0x6c, 0x6c, 0x12, 0x11,
	0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x1a, 0x10, 0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52,
	0x65, 0x73, 0x70, 0x22, 0x16, 0xca, 0xc1, 0x18, 0x12, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x2f, 0x6a, 0x6f, 0x62, 0x6f, 0x72, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x12, 0x44, 0x0a, 0x06, 0x47,
	0x65, 0x74, 0x41, 0x70, 0x69, 0x12, 0x11, 0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e,
	0x41, 0x70, 0x69, 0x51, 0x75, 0x65, 0x72, 0x79, 0x1a, 0x10, 0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61,
	0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x22, 0x15, 0xca, 0xc1, 0x18, 0x11,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6a, 0x6f, 0x62, 0x6f, 0x72, 0x2f, 0x61, 0x70,
	0x69, 0x12, 0x44, 0x0a, 0x07, 0x50, 0x6f, 0x73, 0x74, 0x41, 0x70, 0x69, 0x12, 0x10, 0x2e, 0x73,
	0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x50, 0x6f, 0x73, 0x74, 0x1a, 0x10,
	0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70,
	0x22, 0x15, 0xd2, 0xc1, 0x18, 0x11, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6a, 0x6f,
	0x62, 0x6f, 0x72, 0x2f, 0x61, 0x70, 0x69, 0x12, 0x46, 0x0a, 0x06, 0x50, 0x75, 0x74, 0x41, 0x70,
	0x69, 0x12, 0x0f, 0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x50,
	0x75, 0x74, 0x1a, 0x10, 0x2e, 0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69,
	0x52, 0x65, 0x73, 0x70, 0x22, 0x19, 0xda, 0xc1, 0x18, 0x15, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x6a, 0x6f, 0x62, 0x6f, 0x72, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x3a, 0x69, 0x64, 0x12,
	0x49, 0x0a, 0x09, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x70, 0x69, 0x12, 0x0f, 0x2e, 0x73,
	0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x44, 0x65, 0x6c, 0x1a, 0x10, 0x2e,
	0x73, 0x79, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x73, 0x70, 0x22,
	0x19, 0xe2, 0xc1, 0x18, 0x15, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x6a, 0x6f, 0x62,
	0x6f, 0x72, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x3a, 0x69, 0x64, 0x42, 0x19, 0x5a, 0x17, 0x6a, 0x6f,
	0x62, 0x6f, 0x72, 0x2f, 0x6b, 0x69, 0x74, 0x65, 0x78, 0x5f, 0x67, 0x65, 0x6e, 0x2f, 0x73, 0x79,
	0x73, 0x5f, 0x61, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_sys_api_proto_rawDescOnce sync.Once
	file_sys_api_proto_rawDescData = file_sys_api_proto_rawDesc
)

func file_sys_api_proto_rawDescGZIP() []byte {
	file_sys_api_proto_rawDescOnce.Do(func() {
		file_sys_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_sys_api_proto_rawDescData)
	})
	return file_sys_api_proto_rawDescData
}

var file_sys_api_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_sys_api_proto_goTypes = []interface{}{
	(*ApiQuery)(nil), // 0: sys_api.ApiQuery
	(*ApiPost)(nil),  // 1: sys_api.ApiPost
	(*ApiPut)(nil),   // 2: sys_api.ApiPut
	(*ApiDel)(nil),   // 3: sys_api.ApiDel
	(*ApiResp)(nil),  // 4: sys_api.ApiResp
}
var file_sys_api_proto_depIdxs = []int32{
	0, // 0: sys_api.Api.TriggerUpdateApi:input_type -> sys_api.ApiQuery
	0, // 1: sys_api.Api.GetApiAll:input_type -> sys_api.ApiQuery
	0, // 2: sys_api.Api.GetApi:input_type -> sys_api.ApiQuery
	1, // 3: sys_api.Api.PostApi:input_type -> sys_api.ApiPost
	2, // 4: sys_api.Api.PutApi:input_type -> sys_api.ApiPut
	3, // 5: sys_api.Api.DeleteApi:input_type -> sys_api.ApiDel
	4, // 6: sys_api.Api.TriggerUpdateApi:output_type -> sys_api.ApiResp
	4, // 7: sys_api.Api.GetApiAll:output_type -> sys_api.ApiResp
	4, // 8: sys_api.Api.GetApi:output_type -> sys_api.ApiResp
	4, // 9: sys_api.Api.PostApi:output_type -> sys_api.ApiResp
	4, // 10: sys_api.Api.PutApi:output_type -> sys_api.ApiResp
	4, // 11: sys_api.Api.DeleteApi:output_type -> sys_api.ApiResp
	6, // [6:12] is the sub-list for method output_type
	0, // [0:6] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_sys_api_proto_init() }
func file_sys_api_proto_init() {
	if File_sys_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_sys_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiQuery); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_sys_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiPost); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_sys_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiPut); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_sys_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiDel); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_sys_api_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiResp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_sys_api_proto_msgTypes[2].OneofWrappers = []interface{}{}
	file_sys_api_proto_msgTypes[4].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_sys_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_sys_api_proto_goTypes,
		DependencyIndexes: file_sys_api_proto_depIdxs,
		MessageInfos:      file_sys_api_proto_msgTypes,
	}.Build()
	File_sys_api_proto = out.File
	file_sys_api_proto_rawDesc = nil
	file_sys_api_proto_goTypes = nil
	file_sys_api_proto_depIdxs = nil
}
