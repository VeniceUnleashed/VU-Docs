---
title: UILevelDescription
---

Inherits from [UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary

### Constructors

|  |
| --- |
| **[UILevelDescription](#constructor-0)**() |
| **[UILevelDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UILevelDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UILevelDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "levelName" >}} | string |
| {{< prop "texturePath" >}} | string |
| {{< prop "thumbnailTexturePath" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UILevelDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UILevelDescription {#constructor-0}

> **UILevelDescription**()

Creates a new [UILevelDescription](/vext/ref/fb/uileveldescription) frostbite instance.

### UILevelDescription {#constructor-1}

> **UILevelDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UILevelDescription](/vext/ref/fb/uileveldescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UILevelDescription {#constructor-2}

> **UILevelDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UILevelDescription](/vext/ref/fb/uileveldescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UILevelDescription](/vext/ref/fb/uileveldescription). |

### UILevelDescription {#constructor-3}

> **UILevelDescription**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UILevelDescription](/vext/ref/fb/uileveldescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UILevelDescription](/vext/ref/fb/uileveldescription). |

## Properties

### {{% prop-heading "levelName" %}}

> **string**

### {{% prop-heading "texturePath" %}}

> **string**

### {{% prop-heading "thumbnailTexturePath" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UILevelDescription](/vext/ref/fb/uileveldescription) type.

