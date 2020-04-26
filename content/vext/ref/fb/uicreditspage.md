---
title: UICreditsPage
---

## Summary

### Constructors

|  |
| --- |
| **[UICreditsPage](#constructor-0)**() |
| **[UICreditsPage](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "header1" >}} | string |
| {{< prop "header2" >}} | string |
| {{< prop "lines" >}} | [UICreditsLine](/vext/ref/fb/uicreditsline)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UICreditsPage](/vext/ref/fb/uicreditspage) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UICreditsPage" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UICreditsPage {#constructor-0}

> **UICreditsPage**()

Creates a new [UICreditsPage](/vext/ref/fb/uicreditspage) frostbite instance.

### UICreditsPage {#constructor-1}

> **UICreditsPage**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UICreditsPage](/vext/ref/fb/uicreditspage) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "header1" %}}

> **string**

### {{% prop-heading "header2" %}}

> **string**

### {{% prop-heading "lines" %}}

> **[UICreditsLine](/vext/ref/fb/uicreditsline)**[]

## Methods

### Clone {#clone}

> **Clone**(): [UICreditsPage](/vext/ref/fb/uicreditspage)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UICreditsPage](/vext/ref/fb/uicreditspage)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UICreditsPage](/vext/ref/fb/uicreditspage) type.

