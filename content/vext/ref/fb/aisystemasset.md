---
title: AISystemAsset
---

Inherits from [GameAISystem](/vext/ref/fb/gameaisystem)

## Summary

### Constructors

|  |
| --- |
| **[AISystemAsset](#constructor-0)**() |
| **[AISystemAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AISystemAsset](#constructor-2)**(other: [GameAISystem](/vext/ref/fb/gameaisystem)) |
| **[AISystemAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AISystemAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "behaviours" >}} | [AIVehicleTypes](/vext/ref/fb/aivehicletypes) \| nil |
| {{< prop "orders" >}} | [OrderSettings](/vext/ref/fb/ordersettings) \| nil |
| {{< prop "settings" >}} | [AISettingsData](/vext/ref/fb/aisettingsdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AISystemAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AISystemAsset {#constructor-0}

> **AISystemAsset**()

Creates a new [AISystemAsset](/vext/ref/fb/aisystemasset) frostbite instance.

### AISystemAsset {#constructor-1}

> **AISystemAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AISystemAsset](/vext/ref/fb/aisystemasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AISystemAsset {#constructor-2}

> **AISystemAsset**(other: [GameAISystem](/vext/ref/fb/gameaisystem))

Casts an instance of type [GameAISystem](/vext/ref/fb/gameaisystem) to [AISystemAsset](/vext/ref/fb/aisystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameAISystem](/vext/ref/fb/gameaisystem) | The instance to cast to [AISystemAsset](/vext/ref/fb/aisystemasset). |

### AISystemAsset {#constructor-3}

> **AISystemAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AISystemAsset](/vext/ref/fb/aisystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AISystemAsset](/vext/ref/fb/aisystemasset). |

### AISystemAsset {#constructor-4}

> **AISystemAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AISystemAsset](/vext/ref/fb/aisystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AISystemAsset](/vext/ref/fb/aisystemasset). |

## Properties

### {{% prop-heading "behaviours" %}}

> **[AIVehicleTypes](/vext/ref/fb/aivehicletypes)** \| **nil**

### {{% prop-heading "orders" %}}

> **[OrderSettings](/vext/ref/fb/ordersettings)** \| **nil**

### {{% prop-heading "settings" %}}

> **[AISettingsData](/vext/ref/fb/aisettingsdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AISystemAsset](/vext/ref/fb/aisystemasset) type.

