---
title: MasterUnitNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MasterUnitNodeData](#constructor-0)**() |
| **[MasterUnitNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MasterUnitNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MasterUnitNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "settingsIndex" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "masterGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "masterLfeGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "masterDialogGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "mainMixGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "postEffectsGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "reverbGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "fadeTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "highPassFreq" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lowShelfFreq" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lowShelfGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "highShelfFreq" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "highShelfGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "compThreshold" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "compRatio" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "compAttack" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "compRelease" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "distClipLevel" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "parallelDistortionGain" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "settings" >}} | [MasterUnitSettings](/vext/ref/fb/masterunitsettings)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MasterUnitNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MasterUnitNodeData {#constructor-0}
> **MasterUnitNodeData**()

Creates a new [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata) frostbite instance.

### MasterUnitNodeData {#constructor-1}
> **MasterUnitNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MasterUnitNodeData {#constructor-2}
> **MasterUnitNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata). |

### MasterUnitNodeData {#constructor-3}
> **MasterUnitNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata). |

## Properties
### {{% prop-heading "settingsIndex" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "masterGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "masterLfeGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "masterDialogGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "mainMixGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "postEffectsGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "reverbGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "fadeTime" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "highPassFreq" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lowShelfFreq" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lowShelfGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "highShelfFreq" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "highShelfGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "compThreshold" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "compRatio" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "compAttack" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "compRelease" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "distClipLevel" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "parallelDistortionGain" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "settings" %}}
> **[MasterUnitSettings](/vext/ref/fb/masterunitsettings)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata) type.

