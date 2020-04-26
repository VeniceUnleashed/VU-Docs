---
title: DefaultSelectionItem
---

## Summary

### Constructors

|  |
| --- |
| **[DefaultSelectionItem](#constructor-0)**() |
| **[DefaultSelectionItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultSelectionQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "defaultSelectionIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DefaultSelectionItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DefaultSelectionItem {#constructor-0}

> **DefaultSelectionItem**()

Creates a new [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) frostbite instance.

### DefaultSelectionItem {#constructor-1}

> **DefaultSelectionItem**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "defaultSelectionQuery" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "defaultSelectionIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) type.

