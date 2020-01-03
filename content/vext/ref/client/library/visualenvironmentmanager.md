---
title: VisualEnvironmentManager
---
## Description

## Methods

| Type                                                                        | Name                                            | Parameters                                                                      |
| --------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| void                                                                        | [SetDirty](#setdirty)                           | bool **value**                                                                  |
| bool                                                                        | [GetDirty](#getdirty)                           |                                                                                 |
| void                                                                        | [SetSunRotationX](#setsunrotationx)             | float **value**                                                                 |
| float                                                                       | [GetSunRotationX](#getsunrotationx)             |                                                                                 |
| void                                                                        | [SetSunRotationY](#setsunrotationy)             | float **value**                                                                 |
| float                                                                       | [GetSunRotationY](#getsunrotationy)             |                                                                                 |
| void                                                                        | [SetSunRotationOffsetX](#setsunrotationoffsetx) | float **value**                                                                 |
| float                                                                       | [GetSunRotationOffsetX](#getsunrotationoffsetx) |                                                                                 |
| void                                                                        | [SetSunRotationOffsetY](#setsunrotationoffsety) | float **value**                                                                 |
| float                                                                       | [GetSunRotationOffsetY](#getsunrotationoffsety) |                                                                                 |
| [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate)\[\] | [GetStates](#getstates)                         |                                                                                 |
| void                                                                        | [AddState](#addstate)                           | [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) **state** |
| void                                                                        | [RemoveState](#removestate)                     | [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) **state** |

### SetDirty

> void **SetDirty**(bool **value**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | bool |             |

### GetDirty

> bool **GetDirty**()

### SetSunRotationX

> void **SetSunRotationX**(float **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |

### GetSunRotationX

> float **GetSunRotationX**()

### SetSunRotationY

> void **SetSunRotationY**(float **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |

### GetSunRotationY

> float **GetSunRotationY**()

### SetSunRotationOffsetX

> void **SetSunRotationOffsetX**(float **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |

### GetSunRotationOffsetX

> float **GetSunRotationOffsetX**()

### SetSunRotationOffsetY

> void **SetSunRotationOffsetY**(float **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |

### GetSunRotationOffsetY

> float **GetSunRotationOffsetY**()

### GetStates

> [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate)\[\] **GetStates**()

### AddState

> void **AddState**([VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) **state**)

#### Parameters

| Name  | Type                                                                  | Description |
| ----- | --------------------------------------------------------------------- | ----------- |
| state | [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) |             |

### RemoveState

> void **RemoveState**([VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) **state**)

#### Parameters

| Name  | Type                                                                  | Description |
| ----- | --------------------------------------------------------------------- | ----------- |
| state | [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) |             |
