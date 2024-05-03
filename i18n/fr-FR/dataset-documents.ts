const translation = {
  list: {
    title: 'Documents',
    desc: 'Tous les fichiers de la Connaissance sont affichés ici, et l\'ensemble de la Connaissance peut être lié aux citations Wonder ou indexé via le plugin Chat.',
    addFile: 'ajouter un fichier',
    addPages: 'Ajouter des Pages',
    table: {
      header: {
        fileName: 'NOM DU FICHIER',
        words: 'MOTS',
        hitCount: 'NOMBRE DE RÉCUPÉRATIONS',
        uploadTime: 'TEMPS DE TÉLÉCHARGEMENT',
        status: 'STATUT',
        action: 'ACTION',
      },
    },
    action: {
      uploadFile: 'Télécharger un nouveau fichier',
      settings: 'Paramètres de segment',
      addButton: 'Ajouter un morceau',
      add: 'Ajouter un morceau',
      batchAdd: 'Ajout en lot',
      archive: 'Archive',
      unarchive: 'Décompresser',
      delete: 'Supprimer',
      enableWarning: 'Le fichier archivé ne peut pas être activé',
      sync: 'Synchroniser',
    },
    index: {
      enable: 'Activer',
      disable: 'Désactiver',
      all: 'Tout',
      enableTip: 'Le fichier peut être indexé',
      disableTip: 'Le fichier ne peut pas être indexé',
    },
    status: {
      queuing: 'Mise en file d\'attente',
      indexing: 'Indexation',
      paused: 'En pause',
      error: 'Erreur',
      available: 'Disponible',
      enabled: 'Activé',
      disabled: 'Désactivé',
      archived: 'Archivé',
    },
    empty: {
      title: 'Il n\'y a pas encore de documentation',
      upload: {
        tip: 'Vous pouvez télécharger des fichiers, synchroniser à partir du site web, ou à partir d\'applications web comme Notion, GitHub, etc.',
      },
      sync: {
        tip: 'Wonder téléchargera périodiquement des fichiers de votre Notion et terminera le traitement.',
      },
    },
    delete: {
      title: 'Êtes-vous sûr de vouloir supprimer ?',
      content: 'Si vous avez besoin de reprendre le traitement plus tard, vous continuerez à partir de l\'endroit où vous vous êtes arrêté',
    },
    batchModal: {
      title: 'Ajouter des lots de segments',
      csvUploadTitle: 'Faites glisser et déposez votre fichier CSV ici, ou',
      browse: 'parcourir',
      tip: 'Le fichier CSV doit se conformer à la structure suivante :',
      question: 'question',
      answer: 'réponse',
      contentTitle: 'contenu du bloc',
      content: 'contenu',
      template: 'Téléchargez le modèle ici',
      cancel: 'Annuler',
      run: 'Exécuter le lot',
      runError: 'L\'exécution du lot a échoué',
      processing: 'Dans le traitement par lots',
      completed: 'Importation terminée',
      error: 'Erreur d\'Importation',
      ok: 'D\'accord',
    },
  },
  metadata: {
    title: 'Métadonnées',
    desc: 'L\'étiquetage des métadonnées pour les documents permet à l\'IA d\'y accéder en temps opportun et expose la source des références pour les utilisateurs.',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'Veuillez sélectionner un type de document',
    docTypeChangeTitle: 'Changer le type de document',
    docTypeSelectWarning:
      'Si le type de document est modifié, les métadonnées actuellement remplies ne seront plus conservées',
    firstMetaAction: 'Allons-y',
    placeholder: {
      add: 'Ajouter',
      select: 'Sélectionner',
    },
    source: {
      upload_file: 'Télécharger le fichier',
      notion: 'Synchroniser le formulaire depuis Notion',
      github: 'Synchroniser à partir de Github',
    },
    type: {
      book: 'Livre',
      webPage: 'Page Web',
      paper: 'Papier',
      socialMediaPost: 'Publication sur les Réseaux Sociaux',
      personalDocument: 'Document Personnel',
      businessDocument: 'Document Commercial',
      IMChat: 'Chat IM',
      wikipediaEntry: 'Entrée Wikipédia',
      notion: 'Synchroniser depuis Notion',
      github: 'Synchroniser depuis Github',
      technicalParameters: 'Paramètres Techniques',
    },
    field: {
      processRule: {
        processDoc: 'Document de Processus',
        segmentRule: 'Règle de Segment',
        segmentLength: 'Longueur des Morceaux',
        processClean: 'Processus de Nettoyage du Texte',
      },
      book: {
        title: 'Titre',
        language: 'Langue',
        author: 'Auteur',
        publisher: 'Éditeur',
        publicationDate: 'Date de publication',
        ISBN: 'ISBN',
        category: 'Catégorie',
      },
      webPage: {
        title: 'Titre',
        url: 'URL',
        language: 'Langue',
        authorPublisher: 'Auteur/Éditeur',
        publishDate: 'Date de publication',
        topicsKeywords: 'Sujets/Mots-clés',
        description: 'Description',
      },
      paper: {
        title: 'Titre',
        language: 'Langue',
        author: 'Auteur',
        publishDate: 'Date de publication',
        journalConferenceName: 'Nom du Journal/Conférence',
        volumeIssuePage: 'Volume/Numéro/Page',
        DOI: 'DOI',
        topicsKeywords: 'Sujets/Mots-clés',
        abstract: 'Résumé',
      },
      socialMediaPost: {
        platform: 'Plateforme',
        authorUsername: 'Auteur/Nom d\'utilisateur',
        publishDate: 'Date de publication',
        postURL: 'URL de publication',
        topicsTags: 'Sujets/Tags',
      },
      personalDocument: {
        title: 'Titre',
        author: 'Auteur',
        creationDate: 'Date de Création',
        lastModifiedDate: 'Date de Dernière Modification',
        documentType: 'Type de Document',
        tagsCategory: 'Tags/Catégorie',
      },
      businessDocument: {
        title: 'Titre',
        author: 'Auteur',
        creationDate: 'Date de création',
        lastModifiedDate: 'Date de Dernière Modification',
        documentType: 'Type de Document',
        departmentTeam: 'Département/Équipe',
      },
      IMChat: {
        chatPlatform: 'Plateforme de Chat',
        chatPartiesGroupName: 'Nom du groupe/Parties de discussion',
        participants: 'Participants',
        startDate: 'Date de Début',
        endDate: 'Date de fin',
        topicsKeywords: 'Sujets/Mots-clés',
        fileType: 'Type de fichier',
      },
      wikipediaEntry: {
        title: 'Titre',
        language: 'Langue',
        webpageURL: 'URL de la page web',
        editorContributor: 'Éditeur/Contributeur',
        lastEditDate: 'Date de dernière modification',
        summaryIntroduction: 'Résumé/Introduction',
      },
      notion: {
        title: 'Titre',
        language: 'Langue',
        author: 'Auteur',
        createdTime: 'Heure de création',
        lastModifiedTime: 'Dernière Modification',
        url: 'URL',
        tag: 'Étiquette',
        description: 'Description',
      },
      github: {
        repoName: 'Nom du dépôt',
        repoDesc: 'Description du dépôt',
        repoOwner: 'Propriétaire du dépôt',
        fileName: 'Nom du Fichier',
        filePath: 'Chemin du fichier',
        programmingLang: 'Langage de programmation',
        url: 'URL',
        license: 'Licence',
        lastCommitTime: 'Heure du dernier commit',
        lastCommitAuthor: 'Auteur du dernier commit',
      },
      originInfo: {
        originalFilename: 'Nom de fichier original',
        originalFileSize: 'Taille originale du fichier',
        uploadDate: 'Date de téléchargement',
        lastUpdateDate: 'Date de dernière mise à jour',
        source: 'Source',
      },
      technicalParameters: {
        segmentSpecification: 'Spécification des morceaux',
        segmentLength: 'Longueur des morceaux',
        avgParagraphLength: 'Longueur moyenne de paragraphe',
        paragraphs: 'Paragraphes',
        hitCount: 'Nombre de récupérations',
        embeddingTime: 'Temps d\'incorporation',
        embeddedSpend: 'Dépenses intégrées',
      },
    },
    languageMap: {
      zh: 'Chinois',
      en: 'Anglais',
      es: 'Espagnol',
      fr: 'Français',
      de: 'Allemand',
      ja: 'Japonais',
      ko: 'Coréen',
      ru: 'Russe',
      ar: 'Arabe',
      pt: 'Portugais',
      it: 'Italien',
      nl: 'Néerlandais',
      pl: 'Polonais',
      sv: 'Suédois',
      tr: 'Turc',
      he: 'Hébreu',
      hi: 'Hindi',
      da: 'Danois',
      fi: 'Finlandais',
      no: 'Norvégien',
      hu: 'Hongrois',
      el: 'Grec',
      cs: 'Tchèque',
      th: 'Thaï',
      id: 'Indonésien',
    },
    categoryMap: {
      book: {
        fiction: 'Fiction',
        biography: 'Biographie',
        history: 'Histoire',
        science: 'Science',
        technology: 'Technologie',
        education: 'Éducation',
        philosophy: 'Philosophie',
        religion: 'Religion',
        socialSciences: 'Sciences Sociales',
        art: 'Art',
        travel: 'Voyage',
        health: 'Santé',
        selfHelp: 'AutoAssistance',
        businessEconomics: 'Économie d\'entreprise',
        cooking: 'Cuisson',
        childrenYoungAdults: 'EnfantsJeunesAdultes',
        comicsGraphicNovels: 'BandesDessinéesRomansGraphiques',
        poetry: 'Poésie',
        drama: 'Drame',
        other: 'Autre',
      },
      personalDoc: {
        notes: 'Notes',
        blogDraft: 'Brouillon de Blog',
        diary: 'Journal',
        researchReport: 'Rapport de Recherche',
        bookExcerpt: 'Extrait de livre',
        schedule: 'Programme',
        list: 'Liste',
        projectOverview: 'Aperçu du Projet',
        photoCollection: 'Collection de Photos',
        creativeWriting: 'Écriture Créative',
        codeSnippet: 'Extrait de Code',
        designDraft: 'Projet de Conception',
        personalResume: 'Curriculum Vitae Personnel',
        other: 'Autre',
      },
      businessDoc: {
        meetingMinutes: 'Compte-rendu de Réunion',
        researchReport: 'Rapport de Recherche',
        proposal: 'Proposition',
        employeeHandbook: 'Manuel de l\'employé',
        trainingMaterials: 'Matériaux de Formation',
        requirementsDocument: 'Document de Spécifications',
        designDocument: 'Document de Conception',
        productSpecification: 'Spécification du produit',
        financialReport: 'Rapport Financier',
        marketAnalysis: 'Analyse de marché',
        projectPlan: 'Plan de Projet',
        teamStructure: 'Structure de l\'équipe',
        policiesProcedures: 'Politiques & Procédures',
        contractsAgreements: 'Contrats & Accords',
        emailCorrespondence: 'Correspondance par Email',
        other: 'Autre',
      },
    },
  },
  embedding: {
    processing: 'Traitement des embeddings...',
    paused: 'Intégration en pause',
    completed: 'Intégration terminée',
    error: 'Erreur d\'embedding',
    docName: 'Prétraitement du document',
    mode: 'Règle de segmentation',
    segmentLength: 'Longueur des morceaux',
    textCleaning: 'Pré-définition du texte et nettoyage',
    segments: 'Paragraphes',
    highQuality: 'Mode haute qualité',
    economy: 'Mode économique',
    estimate: 'Consommation estimée',
    stop: 'Arrêtez le traitement',
    resume: 'Reprendre le traitement',
    automatic: 'Automatique',
    custom: 'Personnalisé',
    previewTip: 'L\'aperçu du paragraphe sera disponible après la fin de l\'embedding.',
  },
  segment: {
    paragraphs: 'Paragraphes',
    keywords: 'Mots Clés',
    addKeyWord: 'Ajouter un mot-clé',
    keywordError: 'La longueur maximale du mot-clé est de 20',
    characters: 'personnages',
    hitCount: 'Nombre de récupérations',
    vectorHash: 'Vector hash: ',
    questionPlaceholder: 'ajoutez la question ici',
    questionEmpty: 'La question ne peut pas être vide',
    answerPlaceholder: 'ajoutez une réponse ici',
    answerEmpty: 'La réponse ne peut pas être vide',
    contentPlaceholder: 'ajoutez du contenu ici',
    contentEmpty: 'Le contenu ne peut pas être vide',
    newTextSegment: 'Nouveau Segment de Texte',
    newQaSegment: 'Nouveau Segment Q&R',
    delete: 'Supprimer ce morceau ?',
  },
}

export default translation
