---
title: SoundState
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundState](#constructor-0)**() |
| **[SoundState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundState](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "lpCutoffFrequency" >}} | float |
| {{< prop "duration" >}} | float |
| {{< prop "fadeInTime" >}} | float |
| {{< prop "fadeOutTime" >}} | float |
| {{< prop "bypassSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "hdrSetting" >}} | [HdrSetting](/vext/ref/fb/hdrsetting) \| nil |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |
| {{< prop "fadeSound" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundState {#constructor-0}

> **SoundState**()

Creates a new [SoundState](/vext/ref/fb/soundstate) frostbite instance.

### SoundState {#constructor-1}

> **SoundState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundState](/vext/ref/fb/soundstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundState {#constructor-2}

> **SoundState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundState](/vext/ref/fb/soundstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundState](/vext/ref/fb/soundstate). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "lpCutoffFrequency" %}}

> **float**

### {{% prop-heading "duration" %}}

> **float**

### {{% prop-heading "fadeInTime" %}}

> **float**

### {{% prop-heading "fadeOutTime" %}}

> **float**

### {{% prop-heading "bypassSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "hdrSetting" %}}

> **[HdrSetting](/vext/ref/fb/hdrsetting)** \| **nil**

### {{% prop-heading "mixer" %}}

> **[MixerAsset](/vext/ref/fb/mixerasset)** \| **nil**

### {{% prop-heading "fadeSound" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundState](/vext/ref/fb/soundstate) type.

