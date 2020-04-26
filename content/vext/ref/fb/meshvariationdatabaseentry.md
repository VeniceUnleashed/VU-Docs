---
title: MeshVariationDatabaseEntry
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MeshVariationDatabaseEntry](#constructor-0)**() |
| **[MeshVariationDatabaseEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshVariationDatabaseEntry](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "variationAssetNameHash" >}} | int |
| {{< prop "materials" >}} | [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationDatabaseEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshVariationDatabaseEntry {#constructor-0}
> **MeshVariationDatabaseEntry**()

Creates a new [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry) frostbite instance.

### MeshVariationDatabaseEntry {#constructor-1}
> **MeshVariationDatabaseEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshVariationDatabaseEntry {#constructor-2}
> **MeshVariationDatabaseEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry). |

## Properties
### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "variationAssetNameHash" %}}
> **int**

### {{% prop-heading "materials" %}}
> **[MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry) type.

