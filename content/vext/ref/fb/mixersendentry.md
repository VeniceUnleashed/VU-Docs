---
title: MixerSendEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[MixerSendEntry](#constructor-0)**() |
| **[MixerSendEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerSendEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerSendEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "target" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerSendEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerSendEntry {#constructor-0}

> **MixerSendEntry**()

Creates a new [MixerSendEntry](/vext/ref/fb/mixersendentry) frostbite instance.

### MixerSendEntry {#constructor-1}

> **MixerSendEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerSendEntry](/vext/ref/fb/mixersendentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerSendEntry {#constructor-2}

> **MixerSendEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerSendEntry](/vext/ref/fb/mixersendentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerSendEntry](/vext/ref/fb/mixersendentry). |

### MixerSendEntry {#constructor-3}

> **MixerSendEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerSendEntry](/vext/ref/fb/mixersendentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerSendEntry](/vext/ref/fb/mixersendentry). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "target" %}}

> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** \| **nil**

### {{% prop-heading "mixer" %}}

> **[MixerAsset](/vext/ref/fb/mixerasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerSendEntry](/vext/ref/fb/mixersendentry) type.

