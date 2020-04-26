---
title: UIDataSourceInfo
---

## Summary

### Constructors

|  |
| --- |
| **[UIDataSourceInfo](#constructor-0)**() |
| **[UIDataSourceInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dataName" >}} | string |
| {{< prop "dataCategory" >}} | [UIComponentData](/vext/ref/fb/uicomponentdata) \| nil |
| {{< prop "dataKey" >}} | int |
| {{< prop "useDirectAccess" >}} | bool |
| {{< prop "updateOnInitialize" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIDataSourceInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIDataSourceInfo {#constructor-0}

> **UIDataSourceInfo**()

Creates a new [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) frostbite instance.

### UIDataSourceInfo {#constructor-1}

> **UIDataSourceInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "dataName" %}}

> **string**

### {{% prop-heading "dataCategory" %}}

> **[UIComponentData](/vext/ref/fb/uicomponentdata)** \| **nil**

### {{% prop-heading "dataKey" %}}

> **int**

### {{% prop-heading "useDirectAccess" %}}

> **bool**

### {{% prop-heading "updateOnInitialize" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) type.

