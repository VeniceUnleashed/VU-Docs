---
title: RagdollComponent
---

Inherits from [Component](/vext/ref/shared/type/component)

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetLocalTransform](#getlocaltransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetLocalTransform](#setlocaltransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetWorldTransform](#getworldtransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetWorldTransform](#setworldtransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetRenderTransform](#getrendertransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetRenderTransform](#setrendertransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetInterpolatedLocalTransform](#getinterpolatedlocaltransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetInterpolatedLocalTransform](#setinterpolatedlocaltransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetInterpolatedWorldTransform](#getinterpolatedworldtransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetInterpolatedWorldTransform](#setinterpolatedworldtransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetActiveWorldTransform](#getactiveworldtransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetActiveWorldTransform](#setactiveworldtransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetActiveLocalTransform](#getactivelocaltransform)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetActiveLocalTransform](#setactivelocaltransform)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |
| **[GetBoneVelocity](#getbonevelocity)**(boneId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[SetBoneVelocity](#setbonevelocity)**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform)) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RagdollComponent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Methods

### GetLocalTransform {#getlocaltransform}

> **GetLocalTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetLocalTransform {#setlocaltransform}

> **SetLocalTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetWorldTransform {#getworldtransform}

> **GetWorldTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetWorldTransform {#setworldtransform}

> **SetWorldTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetRenderTransform {#getrendertransform}

> **GetRenderTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetRenderTransform {#setrendertransform}

> **SetRenderTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetInterpolatedLocalTransform {#getinterpolatedlocaltransform}

> **GetInterpolatedLocalTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetInterpolatedLocalTransform {#setinterpolatedlocaltransform}

> **SetInterpolatedLocalTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetInterpolatedWorldTransform {#getinterpolatedworldtransform}

> **GetInterpolatedWorldTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetInterpolatedWorldTransform {#setinterpolatedworldtransform}

> **SetInterpolatedWorldTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetActiveWorldTransform {#getactiveworldtransform}

> **GetActiveWorldTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetActiveWorldTransform {#setactiveworldtransform}

> **SetActiveWorldTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetActiveLocalTransform {#getactivelocaltransform}

> **GetActiveLocalTransform**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetActiveLocalTransform {#setactivelocaltransform}

> **SetActiveLocalTransform**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

### GetBoneVelocity {#getbonevelocity}

> **GetBoneVelocity**(boneId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### SetBoneVelocity {#setbonevelocity}

> **SetBoneVelocity**(boneId: int, transform: [QuatTransform](/vext/ref/shared/type/quattransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **boneId** | int |  |
| **transform** | [QuatTransform](/vext/ref/shared/type/quattransform) |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

