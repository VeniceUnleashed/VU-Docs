---
title: FlagComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[FlagComponentData](#constructor-0)**() |
| **[FlagComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FlagComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[FlagComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FlagComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FlagComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "flag_Team1" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "flag_Team2" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FlagComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FlagComponentData {#constructor-0}
> **FlagComponentData**()

Creates a new [FlagComponentData](/vext/ref/fb/flagcomponentdata) frostbite instance.

### FlagComponentData {#constructor-1}
> **FlagComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FlagComponentData](/vext/ref/fb/flagcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FlagComponentData {#constructor-2}
> **FlagComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [FlagComponentData](/vext/ref/fb/flagcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [FlagComponentData](/vext/ref/fb/flagcomponentdata). |

### FlagComponentData {#constructor-3}
> **FlagComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FlagComponentData](/vext/ref/fb/flagcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FlagComponentData](/vext/ref/fb/flagcomponentdata). |

### FlagComponentData {#constructor-4}
> **FlagComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FlagComponentData](/vext/ref/fb/flagcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FlagComponentData](/vext/ref/fb/flagcomponentdata). |

### FlagComponentData {#constructor-5}
> **FlagComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlagComponentData](/vext/ref/fb/flagcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FlagComponentData](/vext/ref/fb/flagcomponentdata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "flag_Team1" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

### {{% prop-heading "flag_Team2" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FlagComponentData](/vext/ref/fb/flagcomponentdata) type.

