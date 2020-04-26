---
title: AntiRollBar
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AntiRollBar](#constructor-0)**() |
| **[AntiRollBar](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntiRollBar](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "stiffness" >}} | float |
| {{< prop "torqueActivationLimit" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntiRollBar" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntiRollBar {#constructor-0}

> **AntiRollBar**()

Creates a new [AntiRollBar](/vext/ref/fb/antirollbar) frostbite instance.

### AntiRollBar {#constructor-1}

> **AntiRollBar**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntiRollBar](/vext/ref/fb/antirollbar) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntiRollBar {#constructor-2}

> **AntiRollBar**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntiRollBar](/vext/ref/fb/antirollbar). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntiRollBar](/vext/ref/fb/antirollbar). |

## Properties

### {{% prop-heading "stiffness" %}}

> **float**

### {{% prop-heading "torqueActivationLimit" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntiRollBar](/vext/ref/fb/antirollbar) type.

