---
title: RagdollComponent (Client Class)
---
## Description

## Properties

| Name | Type                                                | Writable | Description |
| ---- | --------------------------------------------------- | -------- | ----------- |
| data | [DataContainer](/vext/ref/cls/shr/datacontainer) |          |             |

## Methods

| Type                                                | Name                                                            | Parameters                                                                           |
| --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetLocalTransform](#getlocaltransform)                         | int **boneIndex**                                                                    |
| void                                                | [SetLocalTransform](#setlocaltransform)                         | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetWorldTransform](#getworldtransform)                         | int **boneIndex**                                                                    |
| void                                                | [SetWorldTransform](#setworldtransform)                         | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetRenderTransform](#getrendertransform)                       | int **boneIndex**                                                                    |
| void                                                | [SetRenderTransform](#setrendertransform)                       | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetInterpolatedLocalTransform](#getinterpolatedlocaltransform) | int **boneIndex**                                                                    |
| void                                                | [SetInterpolatedLocalTransform](#setinterpolatedlocaltransform) | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetInterpolatedWorldTransform](#getinterpolatedworldtransform) | int **boneIndex**                                                                    |
| void                                                | [SetInterpolatedWorldTransform](#setinterpolatedworldtransform) | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetActiveWorldTransform](#getactiveworldtransform)             | int **boneIndex**                                                                    |
| void                                                | [SetActiveWorldTransform](#setactiveworldtransform)             | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetActiveLocalTransform](#getactivelocaltransform)             | int **boneIndex**                                                                    |
| void                                                | [SetActiveLocalTransform](#setactivelocaltransform)             | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetBoneVelocity](#getbonevelocity)                             | int **boneIndex**                                                                    |
| void                                                | [SetBoneVelocity](#setbonevelocity)                             | int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform** |

### GetLocalTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetLocalTransform

> void **SetLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetWorldTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetWorldTransform

> void **SetWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetRenderTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetRenderTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetRenderTransform

> void **SetRenderTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetInterpolatedLocalTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetInterpolatedLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetInterpolatedLocalTransform

> void **SetInterpolatedLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetInterpolatedWorldTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetInterpolatedWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetInterpolatedWorldTransform

> void **SetInterpolatedWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetActiveWorldTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetActiveWorldTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetActiveWorldTransform

> void **SetActiveWorldTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetActiveLocalTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetActiveLocalTransform**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetActiveLocalTransform

> void **SetActiveLocalTransform**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |

### GetBoneVelocity

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetBoneVelocity**(int **boneIndex**)

#### Parameters

| Name      | Type | Description |
| --------- | ---- | ----------- |
| boneIndex | int  |             |

### SetBoneVelocity

> void **SetBoneVelocity**(int **boneIndex**, [QuatTransform](/vext/ref/cls/shr/quattransform) **transform**)

#### Parameters

| Name      | Type                                                | Description |
| --------- | --------------------------------------------------- | ----------- |
| boneIndex | int                                                 |             |
| transform | [QuatTransform](/vext/ref/cls/shr/quattransform) |             |
