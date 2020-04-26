---
title: GameTipAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[GameTipAsset](#constructor-0)**() |
| **[GameTipAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameTipAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GameTipAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "tips" >}} | [GameTipData](/vext/ref/fb/gametipdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameTipAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameTipAsset {#constructor-0}

> **GameTipAsset**()

Creates a new [GameTipAsset](/vext/ref/fb/gametipasset) frostbite instance.

### GameTipAsset {#constructor-1}

> **GameTipAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameTipAsset](/vext/ref/fb/gametipasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameTipAsset {#constructor-2}

> **GameTipAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GameTipAsset](/vext/ref/fb/gametipasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GameTipAsset](/vext/ref/fb/gametipasset). |

### GameTipAsset {#constructor-3}

> **GameTipAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameTipAsset](/vext/ref/fb/gametipasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameTipAsset](/vext/ref/fb/gametipasset). |

## Properties

### {{% prop-heading "tips" %}}

> **[GameTipData](/vext/ref/fb/gametipdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameTipAsset](/vext/ref/fb/gametipasset) type.

