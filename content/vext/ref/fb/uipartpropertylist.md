---
title: UIPartPropertyList
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UIPartPropertyList](#constructor-0)**() |
| **[UIPartPropertyList](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIPartPropertyList](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "hudPropertyList" >}} | [UIPartProperties](/vext/ref/fb/uipartproperties)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIPartPropertyList" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIPartPropertyList {#constructor-0}

> **UIPartPropertyList**()

Creates a new [UIPartPropertyList](/vext/ref/fb/uipartpropertylist) frostbite instance.

### UIPartPropertyList {#constructor-1}

> **UIPartPropertyList**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIPartPropertyList](/vext/ref/fb/uipartpropertylist) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIPartPropertyList {#constructor-2}

> **UIPartPropertyList**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIPartPropertyList](/vext/ref/fb/uipartpropertylist). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIPartPropertyList](/vext/ref/fb/uipartpropertylist). |

## Properties

### {{% prop-heading "hudPropertyList" %}}

> **[UIPartProperties](/vext/ref/fb/uipartproperties)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIPartPropertyList](/vext/ref/fb/uipartpropertylist) type.

