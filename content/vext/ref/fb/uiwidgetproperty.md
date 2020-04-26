---
title: UIWidgetProperty
---

## Summary

### Constructors

|  |
| --- |
| **[UIWidgetProperty](#constructor-0)**() |
| **[UIWidgetProperty](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "value" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIWidgetProperty" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIWidgetProperty {#constructor-0}

> **UIWidgetProperty**()

Creates a new [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty) frostbite instance.

### UIWidgetProperty {#constructor-1}

> **UIWidgetProperty**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "value" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIWidgetProperty](/vext/ref/fb/uiwidgetproperty)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty) type.

