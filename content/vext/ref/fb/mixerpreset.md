---
title: MixerPreset
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MixerPreset](#constructor-0)**() |
| **[MixerPreset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerPreset](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameHash" >}} | int |
| {{< prop "groups" >}} | [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)[] |
| {{< prop "nodes" >}} | [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerPreset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerPreset {#constructor-0}

> **MixerPreset**()

Creates a new [MixerPreset](/vext/ref/fb/mixerpreset) frostbite instance.

### MixerPreset {#constructor-1}

> **MixerPreset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerPreset](/vext/ref/fb/mixerpreset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerPreset {#constructor-2}

> **MixerPreset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerPreset](/vext/ref/fb/mixerpreset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerPreset](/vext/ref/fb/mixerpreset). |

## Properties

### {{% prop-heading "nameHash" %}}

> **int**

### {{% prop-heading "groups" %}}

> **[MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)**[]

### {{% prop-heading "nodes" %}}

> **[MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerPreset](/vext/ref/fb/mixerpreset) type.

