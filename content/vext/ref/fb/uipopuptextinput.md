---
title: UIPopupTextInput
---

## Summary

### Constructors

|  |
| --- |
| **[UIPopupTextInput](#constructor-0)**() |
| **[UIPopupTextInput](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | string |
| {{< prop "label" >}} | string |
| {{< prop "defaultValue" >}} | string |
| {{< prop "isPassword" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIPopupTextInput" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIPopupTextInput {#constructor-0}

> **UIPopupTextInput**()

Creates a new [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) frostbite instance.

### UIPopupTextInput {#constructor-1}

> **UIPopupTextInput**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "id" %}}

> **string**

### {{% prop-heading "label" %}}

> **string**

### {{% prop-heading "defaultValue" %}}

> **string**

### {{% prop-heading "isPassword" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIPopupTextInput](/vext/ref/fb/uipopuptextinput)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIPopupTextInput](/vext/ref/fb/uipopuptextinput)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIPopupTextInput](/vext/ref/fb/uipopuptextinput) type.

