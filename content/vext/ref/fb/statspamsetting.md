---
title: StatSpamSetting
---

## Summary

### Constructors

|  |
| --- |
| **[StatSpamSetting](#constructor-0)**() |
| **[StatSpamSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "event" >}} | [StatEvent](/vext/ref/fb/statevent) |
| {{< prop "amountLimit" >}} | int |
| {{< prop "timeLimit" >}} | float |
| {{< prop "playerToPlayer" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StatSpamSetting](/vext/ref/fb/statspamsetting) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StatSpamSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StatSpamSetting {#constructor-0}

> **StatSpamSetting**()

Creates a new [StatSpamSetting](/vext/ref/fb/statspamsetting) frostbite instance.

### StatSpamSetting {#constructor-1}

> **StatSpamSetting**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StatSpamSetting](/vext/ref/fb/statspamsetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "event" %}}

> **[StatEvent](/vext/ref/fb/statevent)**

### {{% prop-heading "amountLimit" %}}

> **int**

### {{% prop-heading "timeLimit" %}}

> **float**

### {{% prop-heading "playerToPlayer" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [StatSpamSetting](/vext/ref/fb/statspamsetting)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StatSpamSetting](/vext/ref/fb/statspamsetting)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StatSpamSetting](/vext/ref/fb/statspamsetting) type.

