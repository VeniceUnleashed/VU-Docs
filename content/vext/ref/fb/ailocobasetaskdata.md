---
title: AILocoBaseTaskData
---

## Summary

### Constructors

|  |
| --- |
| **[AILocoBaseTaskData](#constructor-0)**() |
| **[AILocoBaseTaskData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "poseChangeMovingTowards" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "attentionChangeMovingTowards" >}} | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum) |
| {{< prop "speedChangeMovingTowards" >}} | [AntSpeedLevel](/vext/ref/fb/antspeedlevel) |
| {{< prop "poseChange" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "attentionStateChange" >}} | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum) |
| {{< prop "speedLevelChange" >}} | [AntSpeedLevel](/vext/ref/fb/antspeedlevel) |
| {{< prop "radius" >}} | float |
| {{< prop "isScripted" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AILocoBaseTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AILocoBaseTaskData {#constructor-0}

> **AILocoBaseTaskData**()

Creates a new [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) frostbite instance.

### AILocoBaseTaskData {#constructor-1}

> **AILocoBaseTaskData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "poseChangeMovingTowards" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "attentionChangeMovingTowards" %}}

> **[AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum)**

### {{% prop-heading "speedChangeMovingTowards" %}}

> **[AntSpeedLevel](/vext/ref/fb/antspeedlevel)**

### {{% prop-heading "poseChange" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "attentionStateChange" %}}

> **[AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum)**

### {{% prop-heading "speedLevelChange" %}}

> **[AntSpeedLevel](/vext/ref/fb/antspeedlevel)**

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "isScripted" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) type.

