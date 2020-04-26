---
title: BlueprintAndVariationPair
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[BlueprintAndVariationPair](#constructor-0)**() |
| **[BlueprintAndVariationPair](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BlueprintAndVariationPair](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BlueprintAndVariationPair](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "baseAsset" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "variation" >}} | [ObjectVariation](/vext/ref/fb/objectvariation) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BlueprintAndVariationPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BlueprintAndVariationPair {#constructor-0}
> **BlueprintAndVariationPair**()

Creates a new [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair) frostbite instance.

### BlueprintAndVariationPair {#constructor-1}
> **BlueprintAndVariationPair**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BlueprintAndVariationPair {#constructor-2}
> **BlueprintAndVariationPair**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair). |

### BlueprintAndVariationPair {#constructor-3}
> **BlueprintAndVariationPair**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair). |

## Properties
### {{% prop-heading "baseAsset" %}}
> **[Asset](/vext/ref/fb/asset)** | **nil**

### {{% prop-heading "variation" %}}
> **[ObjectVariation](/vext/ref/fb/objectvariation)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair) type.

