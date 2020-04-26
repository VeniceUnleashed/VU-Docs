---
title: UIItemDescription
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UIItemDescription](#constructor-0)**() |
| **[UIItemDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIItemDescription](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "itemIds" >}} | int[] |
| {{< prop "ignoreBuild" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIItemDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIItemDescription {#constructor-0}

> **UIItemDescription**()

Creates a new [UIItemDescription](/vext/ref/fb/uiitemdescription) frostbite instance.

### UIItemDescription {#constructor-1}

> **UIItemDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIItemDescription](/vext/ref/fb/uiitemdescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIItemDescription {#constructor-2}

> **UIItemDescription**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIItemDescription](/vext/ref/fb/uiitemdescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIItemDescription](/vext/ref/fb/uiitemdescription). |

## Properties

### {{% prop-heading "itemIds" %}}

> **int**[]

### {{% prop-heading "ignoreBuild" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIItemDescription](/vext/ref/fb/uiitemdescription) type.

