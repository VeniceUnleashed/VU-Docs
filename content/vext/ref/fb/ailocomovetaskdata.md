---
title: AILocoMoveTaskData
---

## Summary

### Constructors

|  |
| --- |
| **[AILocoMoveTaskData](#constructor-0)**() |
| **[AILocoMoveTaskData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "wantedPos" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "worldAngle" >}} | float |
| {{< prop "waitTime" >}} | float |
| {{< prop "enterPose" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "exitPose" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "overrideAngle" >}} | bool |
| {{< prop "useClientPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AILocoMoveTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AILocoMoveTaskData {#constructor-0}

> **AILocoMoveTaskData**()

Creates a new [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata) frostbite instance.

### AILocoMoveTaskData {#constructor-1}

> **AILocoMoveTaskData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "wantedPos" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "worldAngle" %}}

> **float**

### {{% prop-heading "waitTime" %}}

> **float**

### {{% prop-heading "enterPose" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "exitPose" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "overrideAngle" %}}

> **bool**

### {{% prop-heading "useClientPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata) type.

