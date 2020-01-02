---
title: RagdollComponent
---
## Description

## Properties

| Name | Type                                                | Writable | Description |
| ---- | --------------------------------------------------- | -------- | ----------- |
| data | [DataContainer](/vext/ref/shared/class/datacontainer) |          |             |

## Methods

| Type                                                | Name                                                            | Parameters                                                                           |
| --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetLocalTransform](#getlocaltransform)                         | int **boneIndex**                                                                    |
| void                                                | [SetLocalTransform](#setlocaltransform)                         | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetWorldTransform](#getworldtransform)                         | int **boneIndex**                                                                    |
| void                                                | [SetWorldTransform](#setworldtransform)                         | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetRenderTransform](#getrendertransform)                       | int **boneIndex**                                                                    |
| void                                                | [SetRenderTransform](#setrendertransform)                       | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetInterpolatedLocalTransform](#getinterpolatedlocaltransform) | int **boneIndex**                                                                    |
| void                                                | [SetInterpolatedLocalTransform](#setinterpolatedlocaltransform) | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetInterpolatedWorldTransform](#getinterpolatedworldtransform) | int **boneIndex**                                                                    |
| void                                                | [SetInterpolatedWorldTransform](#setinterpolatedworldtransform) | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetActiveWorldTransform](#getactiveworldtransform)             | int **boneIndex**                                                                    |
| void                                                | [SetActiveWorldTransform](#setactiveworldtransform)             | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetActiveLocalTransform](#getactivelocaltransform)             | int **boneIndex**                                                                    |
| void                                                | [SetActiveLocalTransform](#setactivelocaltransform)             | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |
| [QuatTransform](/vext/ref/shared/class/quattransform) | [GetBoneVelocity](#getbonevelocity)                             | int **boneIndex**                                                                    |
| void                                                | [SetBoneVelocity](#setbonevelocity)                             | int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform** |

### GetLocalTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetLocalTransform

> void **SetLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetWorldTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetWorldTransform

> void **SetWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetRenderTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetRenderTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetRenderTransform

> void **SetRenderTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetInterpolatedLocalTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetInterpolatedLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetInterpolatedLocalTransform

> void **SetInterpolatedLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetInterpolatedWorldTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetInterpolatedWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetInterpolatedWorldTransform

> void **SetInterpolatedWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetActiveWorldTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetActiveWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetActiveWorldTransform

> void **SetActiveWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetActiveLocalTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetActiveLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetActiveLocalTransform

> void **SetActiveLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |

### GetBoneVelocity

> [QuatTransform](/vext/ref/shared/class/quattransform) **GetBoneVelocity**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetBoneVelocity

> void **SetBoneVelocity**(int **boneIndex**, [QuatTransform](/vext/ref/shared/class/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/shared/class/quattransform) |             |
