---
title: MasterUnitSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MasterUnitSettings](#constructor-0)**() |
| **[MasterUnitSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MasterUnitSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "equalizer" >}} | [EqualizerSettings](/vext/ref/fb/equalizersettings) \| nil |
| {{< prop "compressor" >}} | [CompressorSettings](/vext/ref/fb/compressorsettings) \| nil |
| {{< prop "masterVolume" >}} | float |
| {{< prop "masterLfeGain" >}} | float |
| {{< prop "masterDialogGain" >}} | float |
| {{< prop "reverbVolume" >}} | float |
| {{< prop "mainMixVolume" >}} | float |
| {{< prop "distortionClipLevel" >}} | float |
| {{< prop "parallelDistortionGain" >}} | float |
| {{< prop "postEffectsGain" >}} | float |
| {{< prop "fadeTime" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MasterUnitSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MasterUnitSettings {#constructor-0}

> **MasterUnitSettings**()

Creates a new [MasterUnitSettings](/vext/ref/fb/masterunitsettings) frostbite instance.

### MasterUnitSettings {#constructor-1}

> **MasterUnitSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MasterUnitSettings](/vext/ref/fb/masterunitsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MasterUnitSettings {#constructor-2}

> **MasterUnitSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MasterUnitSettings](/vext/ref/fb/masterunitsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MasterUnitSettings](/vext/ref/fb/masterunitsettings). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "equalizer" %}}

> **[EqualizerSettings](/vext/ref/fb/equalizersettings)** \| **nil**

### {{% prop-heading "compressor" %}}

> **[CompressorSettings](/vext/ref/fb/compressorsettings)** \| **nil**

### {{% prop-heading "masterVolume" %}}

> **float**

### {{% prop-heading "masterLfeGain" %}}

> **float**

### {{% prop-heading "masterDialogGain" %}}

> **float**

### {{% prop-heading "reverbVolume" %}}

> **float**

### {{% prop-heading "mainMixVolume" %}}

> **float**

### {{% prop-heading "distortionClipLevel" %}}

> **float**

### {{% prop-heading "parallelDistortionGain" %}}

> **float**

### {{% prop-heading "postEffectsGain" %}}

> **float**

### {{% prop-heading "fadeTime" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MasterUnitSettings](/vext/ref/fb/masterunitsettings) type.

