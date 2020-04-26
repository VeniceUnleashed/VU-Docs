---
title: UIListItem
---

## Summary

### Constructors

|  |
| --- |
| **[UIListItem](#constructor-0)**() |
| **[UIListItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "label" >}} | string |
| {{< prop "isEnabled" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "isVisible" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "toggleItems" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dataUpdate" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "defaultIsVisible" >}} | bool |
| {{< prop "defaultIsEnabled" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIListItem](/vext/ref/fb/uilistitem) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIListItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIListItem {#constructor-0}

> **UIListItem**()

Creates a new [UIListItem](/vext/ref/fb/uilistitem) frostbite instance.

### UIListItem {#constructor-1}

> **UIListItem**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIListItem](/vext/ref/fb/uilistitem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "label" %}}

> **string**

### {{% prop-heading "isEnabled" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "isVisible" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "toggleItems" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dataUpdate" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "defaultIsVisible" %}}

> **bool**

### {{% prop-heading "defaultIsEnabled" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIListItem](/vext/ref/fb/uilistitem)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIListItem](/vext/ref/fb/uilistitem)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIListItem](/vext/ref/fb/uilistitem) type.

