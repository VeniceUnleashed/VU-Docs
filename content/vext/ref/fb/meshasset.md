---
title: MeshAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[MeshAsset](#constructor-0)**() |
| **[MeshAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MeshAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lodGroup" >}} | [MeshLodGroup](/vext/ref/fb/meshlodgroup) \| nil |
| {{< prop "lodScale" >}} | float |
| {{< prop "cullScale" >}} | float |
| {{< prop "nameHash" >}} | int |
| {{< prop "enlightenType" >}} | [EnlightenType](/vext/ref/fb/enlightentype) |
| {{< prop "materials" >}} | [MeshMaterial](/vext/ref/fb/meshmaterial)[] |
| {{< prop "occluderHighPriority" >}} | bool |
| {{< prop "streamingEnable" >}} | bool |
| {{< prop "destructionMaterialEnable" >}} | bool |
| {{< prop "occluderMeshEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshAsset {#constructor-0}
> **MeshAsset**()

Creates a new [MeshAsset](/vext/ref/fb/meshasset) frostbite instance.

### MeshAsset {#constructor-1}
> **MeshAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshAsset](/vext/ref/fb/meshasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshAsset {#constructor-2}
> **MeshAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MeshAsset](/vext/ref/fb/meshasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MeshAsset](/vext/ref/fb/meshasset). |

### MeshAsset {#constructor-3}
> **MeshAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshAsset](/vext/ref/fb/meshasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshAsset](/vext/ref/fb/meshasset). |

## Properties
### {{% prop-heading "lodGroup" %}}
> **[MeshLodGroup](/vext/ref/fb/meshlodgroup)** | **nil**

### {{% prop-heading "lodScale" %}}
> **float**

### {{% prop-heading "cullScale" %}}
> **float**

### {{% prop-heading "nameHash" %}}
> **int**

### {{% prop-heading "enlightenType" %}}
> **[EnlightenType](/vext/ref/fb/enlightentype)**

### {{% prop-heading "materials" %}}
> **[MeshMaterial](/vext/ref/fb/meshmaterial)**[]

### {{% prop-heading "occluderHighPriority" %}}
> **bool**

### {{% prop-heading "streamingEnable" %}}
> **bool**

### {{% prop-heading "destructionMaterialEnable" %}}
> **bool**

### {{% prop-heading "occluderMeshEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshAsset](/vext/ref/fb/meshasset) type.

