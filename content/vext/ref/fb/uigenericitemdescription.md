---
title: UIGenericItemDescription
---

Inherits from [UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary

### Constructors

|  |
| --- |
| **[UIGenericItemDescription](#constructor-0)**() |
| **[UIGenericItemDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIGenericItemDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIGenericItemDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "imagePath" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIGenericItemDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIGenericItemDescription {#constructor-0}

> **UIGenericItemDescription**()

Creates a new [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) frostbite instance.

### UIGenericItemDescription {#constructor-1}

> **UIGenericItemDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIGenericItemDescription {#constructor-2}

> **UIGenericItemDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). |

### UIGenericItemDescription {#constructor-3}

> **UIGenericItemDescription**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription). |

## Properties

### {{% prop-heading "identifier" %}}

> **string**

### {{% prop-heading "imagePath" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription) type.

