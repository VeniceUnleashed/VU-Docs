---
title: SoundPatchConfigurationParameterEntry
---

Inherits from [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)

## Summary

### Constructors

|  |
| --- |
| **[SoundPatchConfigurationParameterEntry](#constructor-0)**() |
| **[SoundPatchConfigurationParameterEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundPatchConfigurationParameterEntry](#constructor-2)**(other: [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)) |
| **[SoundPatchConfigurationParameterEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameHash" >}} | int |
| {{< prop "value" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchConfigurationParameterEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundPatchConfigurationParameterEntry {#constructor-0}

> **SoundPatchConfigurationParameterEntry**()

Creates a new [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry) frostbite instance.

### SoundPatchConfigurationParameterEntry {#constructor-1}

> **SoundPatchConfigurationParameterEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundPatchConfigurationParameterEntry {#constructor-2}

> **SoundPatchConfigurationParameterEntry**(other: [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry))

Casts an instance of type [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry) to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry) | The instance to cast to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry). |

### SoundPatchConfigurationParameterEntry {#constructor-3}

> **SoundPatchConfigurationParameterEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry). |

## Properties

### {{% prop-heading "nameHash" %}}

> **int**

### {{% prop-heading "value" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry) type.

