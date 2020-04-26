---
title: UIFontMappingCollection
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[UIFontMappingCollection](#constructor-0)**() |
| **[UIFontMappingCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIFontMappingCollection](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIFontMappingCollection](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fonts" >}} | [UIFontMapping](/vext/ref/fb/uifontmapping)[] |
| {{< prop "textDatabase" >}} | [UITextDatabase](/vext/ref/fb/uitextdatabase)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIFontMappingCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIFontMappingCollection {#constructor-0}

> **UIFontMappingCollection**()

Creates a new [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection) frostbite instance.

### UIFontMappingCollection {#constructor-1}

> **UIFontMappingCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIFontMappingCollection {#constructor-2}

> **UIFontMappingCollection**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection). |

### UIFontMappingCollection {#constructor-3}

> **UIFontMappingCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection). |

## Properties

### {{% prop-heading "fonts" %}}

> **[UIFontMapping](/vext/ref/fb/uifontmapping)**[]

### {{% prop-heading "textDatabase" %}}

> **[UITextDatabase](/vext/ref/fb/uitextdatabase)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIFontMappingCollection](/vext/ref/fb/uifontmappingcollection) type.

