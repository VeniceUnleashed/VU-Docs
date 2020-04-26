---
title: UIColorTemplate
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[UIColorTemplate](#constructor-0)**() |
| **[UIColorTemplate](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIColorTemplate](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIColorTemplate](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "colors" >}} | [UIColor](/vext/ref/fb/uicolor)[] |
| {{< prop "active" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIColorTemplate" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIColorTemplate {#constructor-0}

> **UIColorTemplate**()

Creates a new [UIColorTemplate](/vext/ref/fb/uicolortemplate) frostbite instance.

### UIColorTemplate {#constructor-1}

> **UIColorTemplate**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIColorTemplate](/vext/ref/fb/uicolortemplate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIColorTemplate {#constructor-2}

> **UIColorTemplate**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIColorTemplate](/vext/ref/fb/uicolortemplate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIColorTemplate](/vext/ref/fb/uicolortemplate). |

### UIColorTemplate {#constructor-3}

> **UIColorTemplate**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIColorTemplate](/vext/ref/fb/uicolortemplate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIColorTemplate](/vext/ref/fb/uicolortemplate). |

## Properties

### {{% prop-heading "colors" %}}

> **[UIColor](/vext/ref/fb/uicolor)**[]

### {{% prop-heading "active" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIColorTemplate](/vext/ref/fb/uicolortemplate) type.

