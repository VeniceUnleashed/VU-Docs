---
title: UIGraphAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIGraphAsset](#constructor-0)**() |
| **[UIGraphAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIGraphAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIGraphAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nodes" >}} | [UINodeData](/vext/ref/fb/uinodedata)[] |
| {{< prop "globalNode" >}} | [GlobalNode](/vext/ref/fb/globalnode) \| nil |
| {{< prop "connections" >}} | [UINodeConnection](/vext/ref/fb/uinodeconnection)[] |
| {{< prop "audioEventMappings" >}} | [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset) \| nil |
| {{< prop "bundleAssetName" >}} | string |
| {{< prop "eventList" >}} | [UIEventAsset](/vext/ref/fb/uieventasset)[] |
| {{< prop "modal" >}} | bool |
| {{< prop "protectScreens" >}} | bool |
| {{< prop "isWin32UIGraphAsset" >}} | bool |
| {{< prop "isXenonUIGraphAsset" >}} | bool |
| {{< prop "isPs3UIGraphAsset" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGraphAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGraphAsset {#constructor-0}
> **UIGraphAsset**()

Creates a new [UIGraphAsset](/vext/ref/fb/uigraphasset) frostbite instance.

### UIGraphAsset {#constructor-1}
> **UIGraphAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIGraphAsset](/vext/ref/fb/uigraphasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIGraphAsset {#constructor-2}
> **UIGraphAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIGraphAsset](/vext/ref/fb/uigraphasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIGraphAsset](/vext/ref/fb/uigraphasset). |

### UIGraphAsset {#constructor-3}
> **UIGraphAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphAsset](/vext/ref/fb/uigraphasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIGraphAsset](/vext/ref/fb/uigraphasset). |

## Properties
### {{% prop-heading "nodes" %}}
> **[UINodeData](/vext/ref/fb/uinodedata)**[]

### {{% prop-heading "globalNode" %}}
> **[GlobalNode](/vext/ref/fb/globalnode)** | **nil**

### {{% prop-heading "connections" %}}
> **[UINodeConnection](/vext/ref/fb/uinodeconnection)**[]

### {{% prop-heading "audioEventMappings" %}}
> **[UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset)** | **nil**

### {{% prop-heading "bundleAssetName" %}}
> **string**

### {{% prop-heading "eventList" %}}
> **[UIEventAsset](/vext/ref/fb/uieventasset)**[]

### {{% prop-heading "modal" %}}
> **bool**

### {{% prop-heading "protectScreens" %}}
> **bool**

### {{% prop-heading "isWin32UIGraphAsset" %}}
> **bool**

### {{% prop-heading "isXenonUIGraphAsset" %}}
> **bool**

### {{% prop-heading "isPs3UIGraphAsset" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGraphAsset](/vext/ref/fb/uigraphasset) type.

