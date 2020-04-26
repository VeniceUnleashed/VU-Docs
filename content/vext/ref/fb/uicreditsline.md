---
title: UICreditsLine
---

## Summary

### Constructors

|  |
| --- |
| **[UICreditsLine](#constructor-0)**() |
| **[UICreditsLine](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textType" >}} | [UICreditsTextType](/vext/ref/fb/uicreditstexttype) |
| {{< prop "text" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UICreditsLine](/vext/ref/fb/uicreditsline) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UICreditsLine" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UICreditsLine {#constructor-0}

> **UICreditsLine**()

Creates a new [UICreditsLine](/vext/ref/fb/uicreditsline) frostbite instance.

### UICreditsLine {#constructor-1}

> **UICreditsLine**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UICreditsLine](/vext/ref/fb/uicreditsline) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "textType" %}}

> **[UICreditsTextType](/vext/ref/fb/uicreditstexttype)**

### {{% prop-heading "text" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UICreditsLine](/vext/ref/fb/uicreditsline)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UICreditsLine](/vext/ref/fb/uicreditsline)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UICreditsLine](/vext/ref/fb/uicreditsline) type.

