---
title: UIFontMapping
---

## Summary

### Constructors

|  |
| --- |
| **[UIFontMapping](#constructor-0)**() |
| **[UIFontMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scaleformFontName" >}} | string[] |
| {{< prop "fontLongName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIFontMapping](/vext/ref/fb/uifontmapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIFontMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIFontMapping {#constructor-0}

> **UIFontMapping**()

Creates a new [UIFontMapping](/vext/ref/fb/uifontmapping) frostbite instance.

### UIFontMapping {#constructor-1}

> **UIFontMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIFontMapping](/vext/ref/fb/uifontmapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "scaleformFontName" %}}

> **string**[]

### {{% prop-heading "fontLongName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UIFontMapping](/vext/ref/fb/uifontmapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIFontMapping](/vext/ref/fb/uifontmapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIFontMapping](/vext/ref/fb/uifontmapping) type.

