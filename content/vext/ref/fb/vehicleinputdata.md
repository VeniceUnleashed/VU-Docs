---
title: VehicleInputData
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleInputData](#constructor-0)**() |
| **[VehicleInputData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "throttleDeadzone" >}} | float |
| {{< prop "brakeDeadzone" >}} | float |
| {{< prop "yawDeadzone" >}} | float |
| {{< prop "pitchDeadzone" >}} | float |
| {{< prop "rollDeadzone" >}} | float |
| {{< prop "throttleInertiaOutDuration" >}} | float |
| {{< prop "throttleInertiaInDuration" >}} | float |
| {{< prop "throttleInertiaMinRatio" >}} | float |
| {{< prop "brakeInertiaOutDuration" >}} | float |
| {{< prop "brakeInertiaInDuration" >}} | float |
| {{< prop "brakeInertiaMinRatio" >}} | float |
| {{< prop "yawInertiaOutDuration" >}} | float |
| {{< prop "yawInertiaInDuration" >}} | float |
| {{< prop "yawInertiaMinRatio" >}} | float |
| {{< prop "pitchInertiaOutDuration" >}} | float |
| {{< prop "pitchInertiaInDuration" >}} | float |
| {{< prop "pitchInertiaMinRatio" >}} | float |
| {{< prop "rollInertiaOutDuration" >}} | float |
| {{< prop "rollInertiaInDuration" >}} | float |
| {{< prop "rollInertiaMinRatio" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleInputData](/vext/ref/fb/vehicleinputdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleInputData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleInputData {#constructor-0}

> **VehicleInputData**()

Creates a new [VehicleInputData](/vext/ref/fb/vehicleinputdata) frostbite instance.

### VehicleInputData {#constructor-1}

> **VehicleInputData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleInputData](/vext/ref/fb/vehicleinputdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "throttleDeadzone" %}}

> **float**

### {{% prop-heading "brakeDeadzone" %}}

> **float**

### {{% prop-heading "yawDeadzone" %}}

> **float**

### {{% prop-heading "pitchDeadzone" %}}

> **float**

### {{% prop-heading "rollDeadzone" %}}

> **float**

### {{% prop-heading "throttleInertiaOutDuration" %}}

> **float**

### {{% prop-heading "throttleInertiaInDuration" %}}

> **float**

### {{% prop-heading "throttleInertiaMinRatio" %}}

> **float**

### {{% prop-heading "brakeInertiaOutDuration" %}}

> **float**

### {{% prop-heading "brakeInertiaInDuration" %}}

> **float**

### {{% prop-heading "brakeInertiaMinRatio" %}}

> **float**

### {{% prop-heading "yawInertiaOutDuration" %}}

> **float**

### {{% prop-heading "yawInertiaInDuration" %}}

> **float**

### {{% prop-heading "yawInertiaMinRatio" %}}

> **float**

### {{% prop-heading "pitchInertiaOutDuration" %}}

> **float**

### {{% prop-heading "pitchInertiaInDuration" %}}

> **float**

### {{% prop-heading "pitchInertiaMinRatio" %}}

> **float**

### {{% prop-heading "rollInertiaOutDuration" %}}

> **float**

### {{% prop-heading "rollInertiaInDuration" %}}

> **float**

### {{% prop-heading "rollInertiaMinRatio" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleInputData](/vext/ref/fb/vehicleinputdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleInputData](/vext/ref/fb/vehicleinputdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleInputData](/vext/ref/fb/vehicleinputdata) type.

