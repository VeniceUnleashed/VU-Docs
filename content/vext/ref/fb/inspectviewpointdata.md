---
title: InspectViewPointData
---

## Summary

### Constructors

|  |
| --- |
| **[InspectViewPointData](#constructor-0)**() |
| **[InspectViewPointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "viewPointID" >}} | string |
| {{< prop "animationTriggers" >}} | [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)[] |
| {{< prop "continuousAnimationSignal" >}} | [AntRef](/vext/ref/fb/antref)[] |
| {{< prop "lookAtHeight" >}} | float |
| {{< prop "yaw" >}} | float |
| {{< prop "pitch" >}} | float |
| {{< prop "distance" >}} | float |
| {{< prop "fovOffset" >}} | float |
| {{< prop "adjustmentYaw" >}} | float |
| {{< prop "fixed" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InspectViewPointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InspectViewPointData {#constructor-0}

> **InspectViewPointData**()

Creates a new [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) frostbite instance.

### InspectViewPointData {#constructor-1}

> **InspectViewPointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "viewPointID" %}}

> **string**

### {{% prop-heading "animationTriggers" %}}

> **[InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)**[]

### {{% prop-heading "continuousAnimationSignal" %}}

> **[AntRef](/vext/ref/fb/antref)**[]

### {{% prop-heading "lookAtHeight" %}}

> **float**

### {{% prop-heading "yaw" %}}

> **float**

### {{% prop-heading "pitch" %}}

> **float**

### {{% prop-heading "distance" %}}

> **float**

### {{% prop-heading "fovOffset" %}}

> **float**

### {{% prop-heading "adjustmentYaw" %}}

> **float**

### {{% prop-heading "fixed" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [InspectViewPointData](/vext/ref/fb/inspectviewpointdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[InspectViewPointData](/vext/ref/fb/inspectviewpointdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InspectViewPointData](/vext/ref/fb/inspectviewpointdata) type.

