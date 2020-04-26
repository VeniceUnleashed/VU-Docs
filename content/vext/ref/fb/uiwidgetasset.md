---
title: UIWidgetAsset
---

Inherits from [UIAsset](/vext/ref/fb/uiasset)

## Summary

### Constructors

|  |
| --- |
| **[UIWidgetAsset](#constructor-0)**() |
| **[UIWidgetAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIWidgetAsset](#constructor-2)**(other: [UIAsset](/vext/ref/fb/uiasset)) |
| **[UIWidgetAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIWidgetAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "widgetEvents" >}} | [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIWidgetAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIWidgetAsset {#constructor-0}

> **UIWidgetAsset**()

Creates a new [UIWidgetAsset](/vext/ref/fb/uiwidgetasset) frostbite instance.

### UIWidgetAsset {#constructor-1}

> **UIWidgetAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIWidgetAsset](/vext/ref/fb/uiwidgetasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIWidgetAsset {#constructor-2}

> **UIWidgetAsset**(other: [UIAsset](/vext/ref/fb/uiasset))

Casts an instance of type [UIAsset](/vext/ref/fb/uiasset) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIAsset](/vext/ref/fb/uiasset) | The instance to cast to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). |

### UIWidgetAsset {#constructor-3}

> **UIWidgetAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). |

### UIWidgetAsset {#constructor-4}

> **UIWidgetAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIWidgetAsset](/vext/ref/fb/uiwidgetasset). |

## Properties

### {{% prop-heading "widgetEvents" %}}

> **[WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIWidgetAsset](/vext/ref/fb/uiwidgetasset) type.

