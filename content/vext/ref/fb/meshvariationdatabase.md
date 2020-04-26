---
title: MeshVariationDatabase
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[MeshVariationDatabase](#constructor-0)**() |
| **[MeshVariationDatabase](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshVariationDatabase](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MeshVariationDatabase](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry)[] |
| {{< prop "redirectEntries" >}} | [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationDatabase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshVariationDatabase {#constructor-0}
> **MeshVariationDatabase**()

Creates a new [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase) frostbite instance.

### MeshVariationDatabase {#constructor-1}
> **MeshVariationDatabase**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshVariationDatabase {#constructor-2}
> **MeshVariationDatabase**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase). |

### MeshVariationDatabase {#constructor-3}
> **MeshVariationDatabase**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase). |

## Properties
### {{% prop-heading "entries" %}}
> **[MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry)**[]

### {{% prop-heading "redirectEntries" %}}
> **[MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase) type.

