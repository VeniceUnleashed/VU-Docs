---
title: CharacterSocketListAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[CharacterSocketListAsset](#constructor-0)**() |
| **[CharacterSocketListAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterSocketListAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CharacterSocketListAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "gameplaySockets" >}} | [SocketData](/vext/ref/fb/socketdata)[] |
| {{< prop "rigidVisualSockets" >}} | [SocketData](/vext/ref/fb/socketdata)[] |
| {{< prop "skinnedVisualSockets" >}} | [SocketData](/vext/ref/fb/socketdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterSocketListAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterSocketListAsset {#constructor-0}

> **CharacterSocketListAsset**()

Creates a new [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset) frostbite instance.

### CharacterSocketListAsset {#constructor-1}

> **CharacterSocketListAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterSocketListAsset {#constructor-2}

> **CharacterSocketListAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset). |

### CharacterSocketListAsset {#constructor-3}

> **CharacterSocketListAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset). |

## Properties

### {{% prop-heading "gameplaySockets" %}}

> **[SocketData](/vext/ref/fb/socketdata)**[]

### {{% prop-heading "rigidVisualSockets" %}}

> **[SocketData](/vext/ref/fb/socketdata)**[]

### {{% prop-heading "skinnedVisualSockets" %}}

> **[SocketData](/vext/ref/fb/socketdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterSocketListAsset](/vext/ref/fb/charactersocketlistasset) type.

