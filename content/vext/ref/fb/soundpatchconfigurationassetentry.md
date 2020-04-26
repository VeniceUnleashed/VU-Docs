---
title: SoundPatchConfigurationAssetEntry
---

Inherits from [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)

## Summary

### Constructors

|  |
| --- |
| **[SoundPatchConfigurationAssetEntry](#constructor-0)**() |
| **[SoundPatchConfigurationAssetEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundPatchConfigurationAssetEntry](#constructor-2)**(other: [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)) |
| **[SoundPatchConfigurationAssetEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameHash" >}} | int |
| {{< prop "value" >}} | [Asset](/vext/ref/fb/asset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchConfigurationAssetEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundPatchConfigurationAssetEntry {#constructor-0}

> **SoundPatchConfigurationAssetEntry**()

Creates a new [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry) frostbite instance.

### SoundPatchConfigurationAssetEntry {#constructor-1}

> **SoundPatchConfigurationAssetEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundPatchConfigurationAssetEntry {#constructor-2}

> **SoundPatchConfigurationAssetEntry**(other: [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry))

Casts an instance of type [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry) to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry) | The instance to cast to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry). |

### SoundPatchConfigurationAssetEntry {#constructor-3}

> **SoundPatchConfigurationAssetEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry). |

## Properties

### {{% prop-heading "nameHash" %}}

> **int**

### {{% prop-heading "value" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundPatchConfigurationAssetEntry](/vext/ref/fb/soundpatchconfigurationassetentry) type.

