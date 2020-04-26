---
title: SubsystemTimingConfigData
---

## Summary

### Constructors

|  |
| --- |
| **[SubsystemTimingConfigData](#constructor-0)**() |
| **[SubsystemTimingConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sensing" >}} | float |
| {{< prop "evaluation" >}} | float |
| {{< prop "goalUpdates" >}} | float |
| {{< prop "intentUpdates" >}} | float |
| {{< prop "behaviourSelection" >}} | float |
| {{< prop "behaviourExecution" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubsystemTimingConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubsystemTimingConfigData {#constructor-0}

> **SubsystemTimingConfigData**()

Creates a new [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) frostbite instance.

### SubsystemTimingConfigData {#constructor-1}

> **SubsystemTimingConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "sensing" %}}

> **float**

### {{% prop-heading "evaluation" %}}

> **float**

### {{% prop-heading "goalUpdates" %}}

> **float**

### {{% prop-heading "intentUpdates" %}}

> **float**

### {{% prop-heading "behaviourSelection" %}}

> **float**

### {{% prop-heading "behaviourExecution" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) type.

