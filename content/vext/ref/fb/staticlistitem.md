---
title: StaticListItem
---

## Summary

### Constructors

|  |
| --- |
| **[StaticListItem](#constructor-0)**() |
| **[StaticListItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "itemName" >}} | string |
| {{< prop "dynamicDisable" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dynamicNewContent" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "appendPlatformToSID" >}} | bool |
| {{< prop "excludeInRetail" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StaticListItem](/vext/ref/fb/staticlistitem) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StaticListItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StaticListItem {#constructor-0}

> **StaticListItem**()

Creates a new [StaticListItem](/vext/ref/fb/staticlistitem) frostbite instance.

### StaticListItem {#constructor-1}

> **StaticListItem**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StaticListItem](/vext/ref/fb/staticlistitem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "itemName" %}}

> **string**

### {{% prop-heading "dynamicDisable" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dynamicNewContent" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "appendPlatformToSID" %}}

> **bool**

### {{% prop-heading "excludeInRetail" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [StaticListItem](/vext/ref/fb/staticlistitem)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StaticListItem](/vext/ref/fb/staticlistitem)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StaticListItem](/vext/ref/fb/staticlistitem) type.

