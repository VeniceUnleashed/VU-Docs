---
title: SoundDataAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SoundDataAsset](#constructor-0)**() |
| **[SoundDataAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundDataAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundDataAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameHash" >}} | int |
| {{< prop "chunks" >}} | [SoundDataChunk](/vext/ref/fb/sounddatachunk)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundDataAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundDataAsset {#constructor-0}

> **SoundDataAsset**()

Creates a new [SoundDataAsset](/vext/ref/fb/sounddataasset) frostbite instance.

### SoundDataAsset {#constructor-1}

> **SoundDataAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundDataAsset](/vext/ref/fb/sounddataasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundDataAsset {#constructor-2}

> **SoundDataAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundDataAsset](/vext/ref/fb/sounddataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundDataAsset](/vext/ref/fb/sounddataasset). |

### SoundDataAsset {#constructor-3}

> **SoundDataAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundDataAsset](/vext/ref/fb/sounddataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundDataAsset](/vext/ref/fb/sounddataasset). |

## Properties

### {{% prop-heading "nameHash" %}}

> **int**

### {{% prop-heading "chunks" %}}

> **[SoundDataChunk](/vext/ref/fb/sounddatachunk)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundDataAsset](/vext/ref/fb/sounddataasset) type.

