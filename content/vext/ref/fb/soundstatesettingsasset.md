---
title: SoundStateSettingsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[SoundStateSettingsAsset](#constructor-0)**() |
| **[SoundStateSettingsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundStateSettingsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundStateSettingsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "soundStates" >}} | [SoundState](/vext/ref/fb/soundstate)[] |
| {{< prop "impairedHearingImpulseThreshold" >}} | float |
| {{< prop "screamThreshold" >}} | float |
| {{< prop "supressionThreshold" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundStateSettingsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundStateSettingsAsset {#constructor-0}

> **SoundStateSettingsAsset**()

Creates a new [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset) frostbite instance.

### SoundStateSettingsAsset {#constructor-1}

> **SoundStateSettingsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundStateSettingsAsset {#constructor-2}

> **SoundStateSettingsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset). |

### SoundStateSettingsAsset {#constructor-3}

> **SoundStateSettingsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset). |

## Properties

### {{% prop-heading "soundStates" %}}

> **[SoundState](/vext/ref/fb/soundstate)**[]

### {{% prop-heading "impairedHearingImpulseThreshold" %}}

> **float**

### {{% prop-heading "screamThreshold" %}}

> **float**

### {{% prop-heading "supressionThreshold" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset) type.

