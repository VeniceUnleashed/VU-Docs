---
title: UIInputEventNodePort
---

Inherits from [UINodePort](/vext/ref/fb/uinodeport)

## Summary

### Constructors

|  |
| --- |
| **[UIInputEventNodePort](#constructor-0)**() |
| **[UIInputEventNodePort](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIInputEventNodePort](#constructor-2)**(other: [UINodePort](/vext/ref/fb/uinodeport)) |
| **[UIInputEventNodePort](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputEventType" >}} | [UIInputAction](/vext/ref/fb/uiinputaction) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIInputEventNodePort" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIInputEventNodePort {#constructor-0}

> **UIInputEventNodePort**()

Creates a new [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport) frostbite instance.

### UIInputEventNodePort {#constructor-1}

> **UIInputEventNodePort**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIInputEventNodePort {#constructor-2}

> **UIInputEventNodePort**(other: [UINodePort](/vext/ref/fb/uinodeport))

Casts an instance of type [UINodePort](/vext/ref/fb/uinodeport) to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodePort](/vext/ref/fb/uinodeport) | The instance to cast to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport). |

### UIInputEventNodePort {#constructor-3}

> **UIInputEventNodePort**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport). |

## Properties

### {{% prop-heading "inputEventType" %}}

> **[UIInputAction](/vext/ref/fb/uiinputaction)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport) type.

