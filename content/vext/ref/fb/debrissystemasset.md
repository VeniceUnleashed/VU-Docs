---
title: DebrisSystemAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[DebrisSystemAsset](#constructor-0)**() |
| **[DebrisSystemAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DebrisSystemAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DebrisSystemAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "havokMeshes" >}} | [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)[] |
| {{< prop "havokMeshCount" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebrisSystemAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebrisSystemAsset {#constructor-0}
> **DebrisSystemAsset**()

Creates a new [DebrisSystemAsset](/vext/ref/fb/debrissystemasset) frostbite instance.

### DebrisSystemAsset {#constructor-1}
> **DebrisSystemAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DebrisSystemAsset](/vext/ref/fb/debrissystemasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DebrisSystemAsset {#constructor-2}
> **DebrisSystemAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset). |

### DebrisSystemAsset {#constructor-3}
> **DebrisSystemAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset). |

## Properties
### {{% prop-heading "havokMeshes" %}}
> **[DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)**[]

### {{% prop-heading "havokMeshCount" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebrisSystemAsset](/vext/ref/fb/debrissystemasset) type.

