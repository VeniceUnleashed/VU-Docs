---
title: Hook
---
## Description

## Properties

| Name     | Type   | Writable | Description |
| -------- | ------ | -------- | ----------- |
| name     | string |          |             |
| priority | int    |          |             |

## Methods

| Type   | Name                    | Parameters      |
| ------ | ----------------------- | --------------- |
| void   | [Pass](#pass)           | ...args         |
| void   | [Return](#return)       | value **=** nil |
| void   | [Uninstall](#uninstall) |                 |
| void   | [Next](#next)           |                 |
| object | [Call](#call)           |                 |

### Pass

> void **Pass**(...args)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args |      |             |

### Return

> void **Return**(value **=** nil)

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \=   | value |             |

### Uninstall

> void **Uninstall**()

### Next

> void **Next**()

### Call

> object **Call**()
