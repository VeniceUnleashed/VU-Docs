---
title: UILevelSpecificPageHeader
---

## Summary

### Constructors

|  |
| --- |
| **[UILevelSpecificPageHeader](#constructor-0)**() |
| **[UILevelSpecificPageHeader](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "levelNameSID" >}} | string |
| {{< prop "header" >}} | string |
| {{< prop "subHeader" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UILevelSpecificPageHeader" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UILevelSpecificPageHeader {#constructor-0}

> **UILevelSpecificPageHeader**()

Creates a new [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) frostbite instance.

### UILevelSpecificPageHeader {#constructor-1}

> **UILevelSpecificPageHeader**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "levelNameSID" %}}

> **string**

### {{% prop-heading "header" %}}

> **string**

### {{% prop-heading "subHeader" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader) type.

