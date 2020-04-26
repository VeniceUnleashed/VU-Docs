---
title: AdsrNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[AdsrNodeData](#constructor-0)**() |
| **[AdsrNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AdsrNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[AdsrNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "release" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "a" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "d" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "s" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "r" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "finished" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AdsrNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AdsrNodeData {#constructor-0}
> **AdsrNodeData**()

Creates a new [AdsrNodeData](/vext/ref/fb/adsrnodedata) frostbite instance.

### AdsrNodeData {#constructor-1}
> **AdsrNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AdsrNodeData](/vext/ref/fb/adsrnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AdsrNodeData {#constructor-2}
> **AdsrNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [AdsrNodeData](/vext/ref/fb/adsrnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [AdsrNodeData](/vext/ref/fb/adsrnodedata). |

### AdsrNodeData {#constructor-3}
> **AdsrNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdsrNodeData](/vext/ref/fb/adsrnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AdsrNodeData](/vext/ref/fb/adsrnodedata). |

## Properties
### {{% prop-heading "trigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "release" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "a" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "d" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "s" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "r" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "finished" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AdsrNodeData](/vext/ref/fb/adsrnodedata) type.

