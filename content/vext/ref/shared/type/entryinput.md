---
title: EntryInput
---

## Summary

### Constructors

|  |
| --- |
| **[EntryInput](#constructor-0)**() |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deltaTime" >}} | float |
| {{< prop "authoritativeAimingYaw" >}} | float |
| {{< prop "authoritativeAimingPitch" >}} | float |
| {{< prop "authoritativeMovementPenalty" >}} | float |
| {{< prop "authoritativeCameraPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "authoritativeMovementPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "authoritativeMovementVelocity" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "flags" >}} | [EntryInputFlags](/vext/ref/shared/type/entryinputflags) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetLevel](#getlevel)**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)) | float |
| **[SetLevel](#setlevel)**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), level: float) | void |

## Constructors

### EntryInput {#constructor-0}

> **EntryInput**()

## Properties

### {{% prop-heading "deltaTime" %}}

> **float**

### {{% prop-heading "authoritativeAimingYaw" %}}

> **float**

### {{% prop-heading "authoritativeAimingPitch" %}}

> **float**

### {{% prop-heading "authoritativeMovementPenalty" %}}

> **float**

### {{% prop-heading "authoritativeCameraPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "authoritativeMovementPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "authoritativeMovementVelocity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "flags" %}}

> **[EntryInputFlags](/vext/ref/shared/type/entryinputflags)**

## Methods

### GetLevel {#getlevel}

> **GetLevel**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **action** | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### SetLevel {#setlevel}

> **SetLevel**(action: [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum), level: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **action** | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |  |
| **level** | float |  |

